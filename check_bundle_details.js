const fs = require('fs');
const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/index-CMgT0BId.js', 'utf8');

const yt = js.match(/https?:\/\/[^\s"'>]*youtube[^\s"'>]*/gi) || [];
console.log('YouTube in JS:', [...new Set(yt)]);

const ig = js.match(/https?:\/\/[^\s"'>]*instagram[^\s"'>]*/gi) || [];
console.log('Instagram in JS:', [...new Set(ig)]);

const em = js.match(/[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]+/gi) || [];
console.log('Emails in JS:', [...new Set(em)]);

console.log('Includes VictorAI-421?:', js.includes('VictorAI-421'));
console.log('Includes stonicai.421?:', js.includes('stonicai.421'));
console.log('Includes stonicai421@gmail.com?:', js.includes('stonicai421@gmail.com'));
