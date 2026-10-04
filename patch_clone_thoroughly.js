const fs = require('fs');
const path = require('path');

const webDir = 'C:/Users/Punit/Desktop/stonicai-website';

console.log('=== STARTING THOROUGH CLONE REBRANDING ===');

// 1. Patch Checkout-k9cB6RDk.js
const checkoutPath = path.join(webDir, 'assets/Checkout-k9cB6RDk.js');
if (fs.existsSync(checkoutPath)) {
  let cjs = fs.readFileSync(checkoutPath, 'utf8');

  // Replace Pakistani phone and WhatsApp links
  cjs = cjs.replace(/923001538750/g, '919356791463');
  cjs = cjs.replace(/https:\/\/wa\.me\/[0-9]+/g, 'https://whatsapp.com/channel/0029Vb966USJZg44yZcz6k0L');

  // Replace Payment accounts data
  cjs = cjs.replace(
    /jazzcash:\{number:"[^"]*",name:"[^"]*"\}/g,
    'jazzcash:{number:"9356791463-2@ybl",name:"PhonePe (Punit Pawar)"}'
  );
  cjs = cjs.replace(
    /binance:\{id:"[^"]*",name:"[^"]*"\}/g,
    'binance:{id:"pawar-parvati@ptyes",name:"Paytm (Punit Pawar)"}'
  );
  cjs = cjs.replace(
    /bank:\{accountTitle:"[^"]*",accountNumber:"[^"]*",iban:"[^"]*",bankName:"[^"]*"\}/g,
    'bank:{accountTitle:"Punit Pawar",accountNumber:"41029485721",iban:"SBIN0001428",bankName:"State Bank of India (SBI)"}'
  );

  // Replace tab labels
  cjs = cjs.replace('label:"JazzCash"', 'label:"PhonePe UPI"');
  cjs = cjs.replace('label:"Binance Pay"', 'label:"Paytm UPI"');
  cjs = cjs.replace('label:"Crypto (USDT)"', 'label:"Instant UPI"');
  cjs = cjs.replace('label:"Redot Pay"', 'label:"UPI QR"');

  // Replace UI Headings and steps for JazzCash
  cjs = cjs.replace('"JazzCash Account"', '"PhonePe UPI"');
  cjs = cjs.replace('"Open JazzCash app"', '"Open PhonePe / BHIM app"');
  cjs = cjs.replace('"Transfer to Mobile Account: "', '"Send to PhonePe UPI ID: "');
  cjs = cjs.replace(/approx Rs\. /g, '₹');
  cjs = cjs.replace(/Rs\. /g, '₹');

  // Replace UI Headings and steps for Binance -> Paytm
  cjs = cjs.replace('"Binance Pay"', '"Paytm UPI"');
  cjs = cjs.replace('"Binance ID / Email"', '"Paytm UPI ID"');
  cjs = cjs.replace('"Open Binance App"', '"Open Paytm / GPay app"');
  cjs = cjs.replace('"Send to Binance Pay ID: "', '"Send to Paytm UPI ID: "');

  // Replace bank transfer labels
  cjs = cjs.replace('"UBL - United Bank Limited"', '"State Bank of India (SBI)"');
  cjs = cjs.replace('"IBAN"', '"IFSC Code"');

  // Inject Firebase write whenever WhatsApp redirect function is called
  const waTarget = 'const rt=()=>{let t=`I have paid';
  const waReplacement = `const recordSignupToFirebase = (email) => {
    if (!email) return;
    try {
      fetch('https://firestore.googleapis.com/v1/projects/vision-f1e0d/databases/default/documents/users/' + encodeURIComponent(email.toLowerCase()) + '?key=AIzaSyBl3CweKBE8N-T-iblsY_tvh4uHj1x_bJQ', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: {
            email: { stringValue: email.toLowerCase() },
            name: { stringValue: 'Stonic AI User' },
            whatsapp: { stringValue: 'Customer' },
            country: { stringValue: 'India' },
            plan: { stringValue: 'lifetime' },
            approved: { booleanValue: false },
            status: { stringValue: 'pending_approval' },
            paymentMethod: { stringValue: (o || 'UPI').toUpperCase() },
            registeredAt: { stringValue: new Date().toISOString() }
          }
        })
      }).then(() => console.log('[Firebase] User registered in Console:', email)).catch(() => {});
    } catch {}
  };
  const rt=()=>{
    if (x || (r && r.user && r.user.email)) recordSignupToFirebase(x || (r && r.user && r.user.email));
    let t=\`I have paid`;

  if (cjs.includes(waTarget) && !cjs.includes('recordSignupToFirebase')) {
    cjs = cjs.replace(waTarget, waReplacement);
    console.log('Injected Firebase write into Checkout rt() function!');
  }

  // Ensure WhatsApp button opens the user's WhatsApp channel
  cjs = cjs.replace(/\$e\("919356791463",s\)/g, 'window.open("https://whatsapp.com/channel/0029Vb966USJZg44yZcz6k0L", "_blank")');

  fs.writeFileSync(checkoutPath, cjs, 'utf8');
  console.log('Successfully patched Checkout-k9cB6RDk.js!');
}

// 2. Patch index-CMgT0BId.js
const indexPath = path.join(webDir, 'assets/index-CMgT0BId.js');
if (fs.existsSync(indexPath)) {
  let js = fs.readFileSync(indexPath, 'utf8');

  // Replace Cities in testimonials & timezones
  js = js.replace(/Karachi/g, 'Mumbai');
  js = js.replace(/Lahore/g, 'Delhi');
  js = js.replace(/Islamabad/g, 'Bengaluru');
  js = js.replace(/Asia\/Karachi/g, 'Asia/Kolkata');

  // Testimonials greeting
  js = js.replace(/As-salam Alaikum/g, 'Namaste');

  // Replace payment names in index text
  js = js.replace(/JazzCash, bank transfer, USDT, Binance Pay and Redot Pay/g, 'PhonePe, Paytm, UPI and Direct Bank Transfer');
  js = js.replace(/JazzCash, bank transfer, USDT, Binance Pay or RedotPay/g, 'PhonePe, Paytm, UPI or Direct Bank Transfer');
  js = js.replace(/JazzCash, bank transfer, USDT, Binance Pay, Redot Pay/g, 'PhonePe, Paytm, UPI, Bank Transfer');
  js = js.replace(/JazzCash, bank transfer or crypto/g, 'PhonePe, Paytm, UPI or Bank Transfer');
  js = js.replace(/JazzCash/g, 'PhonePe');
  js = js.replace(/Binance Pay/g, 'Paytm UPI');
  js = js.replace(/Redot Pay/g, 'Instant UPI');
  js = js.replace(/RedotPay/g, 'Instant UPI');

  // Social links
  js = js.replace(/https:\/\/youtube\.com\/@[a-zA-Z0-9_\-]+/g, 'https://www.youtube.com/@StonicAI-421');
  js = js.replace(/https:\/\/www\.youtube\.com\/@[a-zA-Z0-9_\-]+/g, 'https://www.youtube.com/@StonicAI-421');
  js = js.replace(/https:\/\/www\.instagram\.com\/[^\s"'>]+/g, 'https://www.instagram.com/stonicai.421?stkn=YWdnZ2YzYzF4Y2x3');
  js = js.replace(/support@stonicai\.com/g, 'stonicai421@gmail.com');
  js = js.replace(/iu\.png/g, 'logo.png');

  // Replace WhatsApp redirects
  js = js.replace(/https:\/\/wa\.me\/[0-9]+/g, 'https://whatsapp.com/channel/0029Vb966USJZg44yZcz6k0L');

  fs.writeFileSync(indexPath, js, 'utf8');
  console.log('Successfully patched index-CMgT0BId.js!');
}

// 3. Patch DesktopLogin-3SHrYhk8.js to write to Firebase on sign in
const dlPath = path.join(webDir, 'assets/DesktopLogin-3SHrYhk8.js');
if (fs.existsSync(dlPath)) {
  let dl = fs.readFileSync(dlPath, 'utf8');

  const dlTarget = 'const r=new URLSearchParams({token:t.access_token,email:t.user.email});';
  const dlReplacement = `if (t && t.user && t.user.email) {
    try {
      fetch('https://firestore.googleapis.com/v1/projects/vision-f1e0d/databases/default/documents/users/' + encodeURIComponent(t.user.email.toLowerCase()) + '?key=AIzaSyBl3CweKBE8N-T-iblsY_tvh4uHj1x_bJQ', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: {
            email: { stringValue: t.user.email.toLowerCase() },
            name: { stringValue: t.user.user_metadata?.full_name || t.user.email.split('@')[0] },
            country: { stringValue: 'India' },
            plan: { stringValue: 'lifetime' },
            approved: { booleanValue: false },
            status: { stringValue: 'pending_approval' },
            registeredAt: { stringValue: new Date().toISOString() }
          }
        })
      }).then(() => console.log('[Firebase] Desktop login saved to Console:', t.user.email)).catch(() => {});
    } catch {}
  }
  const r=new URLSearchParams({token:t.access_token,email:t.user.email});`;

  if (dl.includes(dlTarget) && !dl.includes('Desktop login saved to Console')) {
    dl = dl.replace(dlTarget, dlReplacement);
    fs.writeFileSync(dlPath, dl, 'utf8');
    console.log('Successfully injected Firebase registration into DesktopLogin-3SHrYhk8.js!');
  }
}

// 4. Update index.html
let html = fs.readFileSync(path.join(webDir, 'index.html'), 'utf8');
html = html.replace(/Karachi/g, 'Mumbai');
html = html.replace(/Lahore/g, 'Delhi');
html = html.replace(/Islamabad/g, 'Bengaluru');
html = html.replace(/As-salam Alaikum/g, 'Namaste');
html = html.replace(/iu\.png/g, 'logo.png');
html = html.replace(/support@stonicai\.com/g, 'stonicai421@gmail.com');
html = html.replace(/https:\/\/www\.youtube\.com\/@[a-zA-Z0-9_\-]+/g, 'https://www.youtube.com/@StonicAI-421');
html = html.replace(/https:\/\/youtube\.com\/@[a-zA-Z0-9_\-]+/g, 'https://www.youtube.com/@StonicAI-421');
html = html.replace(/https:\/\/www\.instagram\.com\/[^\s"'>]+/g, 'https://www.instagram.com/stonicai.421?stkn=YWdnZ2YzYzF4Y2x3');

fs.writeFileSync(path.join(webDir, 'index.html'), html, 'utf8');
console.log('Successfully patched index.html!');

console.log('=== THOROUGH CLONE REBRANDING COMPLETED ===');
