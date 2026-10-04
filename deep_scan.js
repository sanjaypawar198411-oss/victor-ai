const fs = require('fs');
const path = require('path');

const webDir = 'C:/Users/Punit/Desktop/stonicai-website';

const targets = [
  'jazzcash',
  'jazz',
  'binance',
  'redotpay',
  'pkr',
  'rs.',
  'rs ',
  'ubl',
  'meezan',
  'sadapay',
  'nayapay',
  'pakistan',
  'vehari',
  'multan',
  'usman',
  'ahmad',
  'wa.me',
  '0300',
  '0329',
  'support@stonicai.com',
  'inventorusman',
  'iu.png'
];

function scan(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (item === '.git' || item === 'node_modules') continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      scan(full);
    } else if (item.endsWith('.js') || item.endsWith('.html') || item.endsWith('.json')) {
      const content = fs.readFileSync(full, 'utf8');
      const lower = content.toLowerCase();
      targets.forEach(t => {
        let count = 0;
        let idx = 0;
        while ((idx = lower.indexOf(t, idx)) !== -1) {
          count++;
          if (count === 1) {
            console.log(`[${item}] Found "${t}": ...${content.slice(Math.max(0, idx - 30), Math.min(content.length, idx + 60)).replace(/\n/g, ' ')}...`);
          }
          idx += t.length;
        }
        if (count > 1) {
          console.log(`[${item}] Total "${t}": ${count}`);
        }
      });
    }
  }
}

scan(webDir);
