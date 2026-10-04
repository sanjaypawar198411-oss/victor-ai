const fs = require('fs');

const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/Checkout-k9cB6RDk.js', 'utf8');
console.log('Top of Checkout-k9cB6RDk.js:');
console.log(js.slice(0, 500));
