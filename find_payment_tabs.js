const fs = require('fs');

const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/Checkout-k9cB6RDk.js', 'utf8');

// Find the payment tabs list definition
let idx = js.indexOf('label:"Bank Transfer"');
console.log('Payment tabs definition:');
console.log(js.slice(idx - 100, idx + 400));
