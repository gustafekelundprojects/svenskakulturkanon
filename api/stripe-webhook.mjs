// Tar emot Stripes besked om betalda order och skickar dem vidare till Stardist.
// Miljövariabler i Vercel: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET,
// och när Stardist lämnat uppgifter om sin order-API: STARDIST_ORDER_URL, STARDIST_API_KEY.
// Webhook i Stripe: https://svenskakulturkanon.se/api/stripe-webhook, händelse checkout.session.completed.
import crypto from 'node:crypto';
import { tillStardist } from './_stardist.mjs';

function verifiera(raw, header, secret) {
  const delar = Object.fromEntries((header || '').split(',').map(x => x.split('=')));
  const t = delar.t, v1 = (header || '').split(',').filter(x => x.startsWith('v1=')).map(x => x.slice(3));
  if (!t || !v1.length) return false;
  if (Math.abs(Date.now() / 1000 - Number(t)) > 300) return false;
  const vantat = crypto.createHmac('sha256', secret).update(`${t}.${raw}`).digest('hex');
  return v1.some(s => s.length === vantat.length && crypto.timingSafeEqual(Buffer.from(s), Buffer.from(vantat)));
}

export async function POST(request) {
  const raw = await request.text();
  if (!verifiera(raw, request.headers.get('stripe-signature'), process.env.STRIPE_WEBHOOK_SECRET || '')) return new Response('Ogiltig signatur', { status: 400 });
  const event = JSON.parse(raw);
  if (event.type !== 'checkout.session.completed' && event.type !== 'checkout.session.async_payment_succeeded') return new Response('ok');
  const s0 = event.data.object;
  if (s0.payment_status !== 'paid') return new Response('ok – väntar på betalning');

  const r = await fetch(`https://api.stripe.com/v1/checkout/sessions/${s0.id}?expand[]=line_items.data.price.product`, { headers: { authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}` } });
  const s = await r.json();
  const adr = s.collected_information?.shipping_details || s.shipping_details || {};
  const order = {
    ordernummer: s.id.slice(-12).toUpperCase(),
    stripe_session: s.id,
    datum: new Date(s.created * 1000).toISOString(),
    kund: { namn: adr.name || s.customer_details?.name, epost: s.customer_details?.email, telefon: s.customer_details?.phone },
    leveransadress: adr.address,
    frakt: s.metadata?.frakt,
    rader: s.line_items.data.map(l => ({ artikelnr: l.price.product.metadata?.artikelnr, namn: l.description, antal: l.quantity, pris_inkl_moms: l.amount_total / 100 })),
    totalt_inkl_moms: s.amount_total / 100,
    valuta: s.currency,
  };
  console.log('Ny order', JSON.stringify(order));
  try { await tillStardist(order); }
  catch (e) { console.error('Kunde inte skicka till Stardist', e); return new Response('Stardist-fel', { status: 500 }); } // Stripe försöker igen
  return new Response('ok');
}
