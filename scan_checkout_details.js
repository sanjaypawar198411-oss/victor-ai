const fs = require('fs');
const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/Checkout-k9cB6RDk.js', 'utf8');

const targets = ['jazzcash', 'jazz', 'binance', 'redotpay', 'pkr', 'rs.', 'ubl', 'pakistan', 'vehari', 'multan', 'usman', 'ahmad', 'wa.me', '0300', '0329'];

targets.forEach(t => {
  let idx = 0;
  let count = 0;
  const lower = js.toLowerCase();
  while ((idx = lower.indexOf(t, idx)) !== -1) {
    count++;
    if (count <= 3) {
      console.log(`[Checkout] "${t}": ...${js.slice(Math.max(0, idx - 40), Math.min(js.length, idx + 80)).replace(/\n/g, ' ')}...`);
    }
    idx += t.length;
  }
  if (count > 3) console.log(`[Checkout] Total "${t}": ${count}`);
});
