const fs = require('fs');

const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/Checkout-k9cB6RDk.js', 'utf8');

// Find where g is defined or imported
let idx = js.indexOf('.signInWithOAuth');
console.log('Snippet before signInWithOAuth:');
console.log(js.slice(idx - 150, idx + 100));
