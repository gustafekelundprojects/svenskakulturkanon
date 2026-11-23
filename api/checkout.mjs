// Skapar en Stripe Checkout-session för en beställning från svenskakulturkanon.se/bestall.
// Miljövariabler i Vercel: STRIPE_SECRET_KEY (och valfritt SITE_URL).
// Betalsätt (kort, Klarna, Swish) slås på i Stripe: Settings → Payment methods.
import butik from '../butik.json' with { type: 'json' };

const SITE = process.env.SITE_URL || 'https://svenskakulturkanon.se';
const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json' } });

export async function POST(request) {
  if (!process.env.STRIPE_SECRET_KEY) return json({ error: 'Kassan är inte aktiverad än.' }, 503);
  let body; try { body = await request.json(); } catch { return json({ error: 'Ogiltig beställning.' }, 400); }

  const items = Object.entries(body.items || {})
    .map(([id, q]) => [id, Math.floor(Number(q))])
    .filter(([id, q]) => butik.produkter[id] && q > 0);
  const antal = items.reduce((s, [, q]) => s + q, 0);
  if (!antal) return json({ error: 'Varukorgen är tom.' }, 400);
  if (antal > butik.max_antal_per_order) return json({ error: `Beställ högst ${butik.max_antal_per_order} böcker här. Större beställningar: svenskakulturkanon.se/foretagsgava` }, 400);
  const fraktId = butik.frakt[body.ship] ? body.ship : 'ombud';
  const fri = antal >= butik.fri_frakt_fran_antal;

  const p = new URLSearchParams();
  p.set('mode', 'payment');
  p.set('locale', 'sv');
  p.set('currency', butik.valuta);
  p.set('success_url', `${SITE}/tack?order={CHECKOUT_SESSION_ID}`);
  p.set('cancel_url', `${SITE}/bestall`);
  p.set('phone_number_collection[enabled]', 'true');
  p.set('billing_address_collection', 'auto');
  butik.lander.forEach((l, i) => p.set(`shipping_address_collection[allowed_countries][${i}]`, l));
  p.set('custom_text[submit][message]', 'Första upplagan skickas i december 2026. Du får en orderbekräftelse via e-post.');
  items.forEach(([id, q], i) => {
    const pr = butik.produkter[id];
    p.set(`line_items[${i}][quantity]`, String(q));
    p.set(`line_items[${i}][price_data][currency]`, butik.valuta);
    p.set(`line_items[${i}][price_data][unit_amount]`, String(pr.pris * 100));
    p.set(`line_items[${i}][price_data][product_data][name]`, pr.namn);
    p.set(`line_items[${i}][price_data][product_data][description]`, pr.beskrivning);
    p.set(`line_items[${i}][price_data][product_data][metadata][artikelnr]`, pr.artikelnr);
    if (process.env.STRIPE_TAX_RATE_BOOK) p.set(`line_items[${i}][tax_rates][0]`, process.env.STRIPE_TAX_RATE_BOOK);
  });
  const fr = butik.frakt[fraktId];
  p.set('shipping_options[0][shipping_rate_data][type]', 'fixed_amount');
  p.set('shipping_options[0][shipping_rate_data][display_name]', fri ? `${fr.namn} – fri frakt` : fr.namn);
  p.set('shipping_options[0][shipping_rate_data][fixed_amount][amount]', String(fri ? 0 : fr.pris * 100));
  p.set('shipping_options[0][shipping_rate_data][fixed_amount][currency]', butik.valuta);
  p.set('shipping_options[0][shipping_rate_data][metadata][frakt]', fraktId);
  p.set('metadata[frakt]', fraktId);
  p.set('metadata[kalla]', 'svenskakulturkanon.se');
  p.set('payment_intent_data[description]', 'Svenska Kulturkanon – webborder');

  const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: { authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`, 'content-type': 'application/x-www-form-urlencoded' },
    body: p,
  });
  const s = await res.json();
  if (!res.ok) { console.error('Stripe', s.error); return json({ error: 'Kassan kunde inte öppnas. Försök igen om en stund.' }, 502); }
  return json({ url: s.url });
}
