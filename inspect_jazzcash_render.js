const fs = require('fs');

const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/Checkout-k9cB6RDk.js', 'utf8');

let idx = js.indexOf('o==="jazzcash"');
console.log('jazzcash render:');
console.log(js.slice(idx, idx + 1200));
