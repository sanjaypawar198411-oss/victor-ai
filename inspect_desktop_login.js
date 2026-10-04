const fs = require('fs');

const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/DesktopLogin-3SHrYhk8.js', 'utf8');

console.log('DesktopLogin size:', js.length);
console.log('Snippet:');
console.log(js.slice(0, 1000));
