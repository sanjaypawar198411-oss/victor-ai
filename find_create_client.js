const fs = require('fs');

const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/index-CMgT0BId.js', 'utf8');

// Find where createClient is called in index-CMgT0BId.js
let idx = js.indexOf('createClient(');
console.log('createClient in index:');
console.log(js.slice(idx - 50, idx + 250));
