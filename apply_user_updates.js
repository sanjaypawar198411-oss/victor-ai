const fs = require('fs');
const path = require('path');

const siteDir = 'C:/Users/Punit/Desktop/stonicai-website';

// 1. Copy logo.png over iu.png so founder photo is Victor AI Logo
const logoPath = path.join(siteDir, 'logo.png');
const iuPath = path.join(siteDir, 'iu.png');
if (fs.existsSync(logoPath)) {
  fs.copyFileSync(logoPath, iuPath);
  console.log('Replaced iu.png with Victor AI logo.png!');
}

// 2. Update index.html
let html = fs.readFileSync(path.join(siteDir, 'index.html'), 'utf8');

// Replace YouTube
html = html.replace(/https:\/\/youtube\.com\/@[a-zA-Z0-9_\-]+/g, 'https://www.youtube.com/@StonicAI-421');
html = html.replace(/https:\/\/www\.youtube\.com\/@[a-zA-Z0-9_\-]+/g, 'https://www.youtube.com/@StonicAI-421');

// Replace Instagram
html = html.replace(/https:\/\/www\.instagram\.com\/[^\s"'>]+/g, 'https://www.instagram.com/stonicai.421?stkn=YWdnZ2YzYzF4Y2x3');

// Replace Email
html = html.replace(/support@stonicai\.com/g, 'stonicai421@gmail.com');

fs.writeFileSync(path.join(siteDir, 'index.html'), html, 'utf8');
console.log('Updated index.html with YouTube, Insta, and Email!');

// 3. Update assets/index-CMgT0BId.js
const jsPath = path.join(siteDir, 'assets/index-CMgT0BId.js');
if (fs.existsSync(jsPath)) {
  let js = fs.readFileSync(jsPath, 'utf8');

  js = js.replace(/https:\/\/youtube\.com\/@[a-zA-Z0-9_\-]+/g, 'https://www.youtube.com/@StonicAI-421');
  js = js.replace(/https:\/\/www\.youtube\.com\/@[a-zA-Z0-9_\-]+/g, 'https://www.youtube.com/@StonicAI-421');
  js = js.replace(/https:\/\/www\.instagram\.com\/[^\s"'>]+/g, 'https://www.instagram.com/stonicai.421?stkn=YWdnZ2YzYzF4Y2x3');
  js = js.replace(/support@stonicai\.com/g, 'stonicai421@gmail.com');

  fs.writeFileSync(jsPath, js, 'utf8');
  console.log('Updated index-CMgT0BId.js with YouTube, Insta, and Email!');
}

// 4. Update assets/Checkout-k9cB6RDk.js
const checkoutJsPath = path.join(siteDir, 'assets/Checkout-k9cB6RDk.js');
if (fs.existsSync(checkoutJsPath)) {
  let cjs = fs.readFileSync(checkoutJsPath, 'utf8');
  cjs = cjs.replace(/number:"[^"]+",name:"[^"]+"/g, 'number:"9356791463-2@ybl",name:"PhonePe / Paytm (Punit Pawar)"');
  cjs = cjs.replace(/stonicai421@gmail\.com|support@stonicai\.com/g, 'stonicai421@gmail.com');
  fs.writeFileSync(checkoutJsPath, cjs, 'utf8');
  console.log('Updated Checkout-k9cB6RDk.js with PhonePe UPI and Email!');
}

console.log('All branding assets updated in website folder!');
