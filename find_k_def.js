const fs = require('fs');

const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/Checkout-k9cB6RDk.js', 'utf8');

let idx = js.indexOf('const K=async');
console.log('K function:');
console.log(js.slice(idx, idx + 600));
