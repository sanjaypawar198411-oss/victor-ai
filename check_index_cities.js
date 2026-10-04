const fs = require('fs');

const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/index-CMgT0BId.js', 'utf8');

// Find mentions of "Karachi", "Lahore", "Islamabad", "PKR", "Rupees", "JazzCash"
const terms = ['karachi', 'lahore', 'islamabad', 'pkr', 'jazzcash', 'binance', 'redotpay'];
terms.forEach(t => {
  let idx = 0;
  let count = 0;
  const lower = js.toLowerCase();
  while ((idx = lower.indexOf(t, idx)) !== -1) {
    count++;
    if (count <= 2) {
      console.log(`[index] "${t}": ...${js.slice(Math.max(0, idx - 40), Math.min(js.length, idx + 80)).replace(/\n/g, ' ')}...`);
    }
    idx += t.length;
  }
  if (count > 2) console.log(`[index] Total "${t}": ${count}`);
});
