const fs = require('fs');

const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/Checkout-k9cB6RDk.js', 'utf8');

// Find all payment method names in Checkout-k9cB6RDk.js
console.log('Payment method mentions:');
const pm = js.match(/(?:jazzcash|binance|bank|jazz|easypaisa|ubl|sadapay|nayapay|card|paypal|upi|phonepe|paytm)/gi) || [];
console.log([...new Set(pm.map(x => x.toLowerCase()))]);

// Print where bank and jazzcash are rendered
let idx = js.indexOf('jazzcash');
while (idx !== -1) {
  console.log('--- jazzcash snippet ---');
  console.log(js.slice(Math.max(0, idx - 100), Math.min(js.length, idx + 200)));
  idx = js.indexOf('jazzcash', idx + 10);
}
