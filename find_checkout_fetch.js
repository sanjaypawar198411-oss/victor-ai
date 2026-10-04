const fs = require('fs');

const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/Checkout-k9cB6RDk.js', 'utf8');

// Find all fetch calls in Checkout-k9cB6RDk.js
const fetchCalls = [];
let idx = 0;
while ((idx = js.indexOf('fetch(', idx)) !== -1) {
  fetchCalls.push(js.slice(idx, idx + 200));
  idx += 6;
}
console.log('Fetch calls in checkout chunk:', fetchCalls.length);
fetchCalls.forEach((f, i) => console.log(`${i}: ${f}`));
