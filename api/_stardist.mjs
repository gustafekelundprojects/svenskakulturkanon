// Skickar en betald order till Stardists ordersystem.
// Format och adress bestäms när Stardist skickat dokumentationen för sin order-API (webbservice API/EDI).
// Tills dess loggas ordern bara, och syns i Stripe (Payments) och i Vercels loggar.
export async function tillStardist(order) {
  const url = process.env.STARDIST_ORDER_URL;
  if (!url) { console.log('STARDIST_ORDER_URL saknas – ordern registreras manuellt på Stardists rapportwebb.'); return; }
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${process.env.STARDIST_API_KEY || ''}` },
    body: JSON.stringify(order),
  });
  if (!res.ok) throw new Error(`Stardist svarade ${res.status}: ${await res.text()}`);
}
