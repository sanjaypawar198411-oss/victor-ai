const fs = require('fs');

const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/Checkout-k9cB6RDk.js', 'utf8');

let idx = js.indexOf('o==="jazzcash"&&e.jsxs');
console.log('jazzcash JSX render:');
console.log(js.slice(idx, idx + 1800));
