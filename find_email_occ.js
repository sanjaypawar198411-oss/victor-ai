const fs = require('fs');

const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/Checkout-k9cB6RDk.js', 'utf8');

let idx = 0;
const emailOcc = [];
while ((idx = js.indexOf('email', idx)) !== -1) {
  emailOcc.push(js.slice(Math.max(0, idx - 40), Math.min(js.length, idx + 80)));
  idx += 5;
}
console.log('Email occurrences:', emailOcc.length);
emailOcc.forEach((e, i) => console.log(`${i}: ${e}`));
