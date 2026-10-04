const fs = require('fs');

const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/DesktopLogin-3SHrYhk8.js', 'utf8');

console.log(js.slice(1000, 3000));
