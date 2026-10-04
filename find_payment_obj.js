const fs = require('fs');

const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/Checkout-k9cB6RDk.js', 'utf8');

let idx = js.indexOf('binance:{id:');
console.log('Payment accounts object:');
console.log(js.slice(idx - 100, idx + 400));
