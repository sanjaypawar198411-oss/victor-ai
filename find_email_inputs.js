const fs = require('fs');

const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/Checkout-k9cB6RDk.js', 'utf8');

let idx = 0;
const emailInputs = [];
while ((idx = js.indexOf('type:"email"', idx)) !== -1) {
  emailInputs.push(js.slice(Math.max(0, idx - 100), Math.min(js.length, idx + 250)));
  idx += 12;
}
console.log('Email inputs:', emailInputs.length);
emailInputs.forEach((e, i) => console.log(`${i}: ${e}`));
