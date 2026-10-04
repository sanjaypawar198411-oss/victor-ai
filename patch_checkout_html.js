const fs = require('fs');
const path = require('path');

const filePath = 'C:/Users/Punit/Desktop/stonicai-website/checkout.html';
let html = fs.readFileSync(filePath, 'utf8');

// Fix logo
html = html.replace('./assets/images/logo_withoutbackground.png', '/logo.png');

// Fix UPI QR code
const qrTarget = 'https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=upi://pay?pa=punitpawar.stonic@upi&pn=Punit%20Pawar&am=3999&cu=INR';
const qrReplacement = 'https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=upi://pay?pa=9356791463-2@ybl&pn=Punit%20Pawar&am=3999&cu=INR';
html = html.replace(qrTarget, qrReplacement);

// Replace upiIdVal with dual UPI (PhonePe and Paytm)
const upiBlockOld = `<div class="space-y-1">
                <span class="text-[11px] uppercase tracking-wider text-gray-400 font-mono">UPI ID:</span>
                <div class="p-3 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between gap-2">
                  <span class="font-mono text-sm font-bold text-emerald-400" id="upiIdVal">punitpawar.stonic@upi</span>
                  <button type="button" onclick="copyText('punitpawar.stonic@upi', 'UPI ID copied!')" class="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors" title="Copy UPI ID">
                    <i data-lucide="copy" class="w-4 h-4"></i>
                  </button>
                </div>
              </div>`;

const upiBlockNew = `<div class="space-y-2.5">
                <div class="space-y-1">
                  <span class="text-[11px] uppercase tracking-wider text-purple-400 font-mono font-bold flex items-center gap-1.5">
                    <span>PhonePe UPI:</span>
                  </span>
                  <div class="p-2.5 rounded-xl bg-black/50 border border-purple-500/30 flex items-center justify-between gap-2">
                    <span class="font-mono text-xs font-bold text-purple-300" id="phonepeVal">9356791463-2@ybl</span>
                    <button type="button" onclick="copyText('9356791463-2@ybl', 'PhonePe UPI copied!')" class="p-1.5 rounded-lg bg-purple-500/15 hover:bg-purple-500/30 text-purple-300 transition-colors" title="Copy PhonePe UPI">
                      <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                    </button>
                  </div>
                </div>

                <div class="space-y-1">
                  <span class="text-[11px] uppercase tracking-wider text-cyan-400 font-mono font-bold flex items-center gap-1.5">
                    <span>Paytm UPI:</span>
                  </span>
                  <div class="p-2.5 rounded-xl bg-black/50 border border-cyan-500/30 flex items-center justify-between gap-2">
                    <span class="font-mono text-xs font-bold text-cyan-300" id="paytmVal">pawar-parvati@ptyes</span>
                    <button type="button" onclick="copyText('pawar-parvati@ptyes', 'Paytm UPI copied!')" class="p-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/30 text-cyan-300 transition-colors" title="Copy Paytm UPI">
                      <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                    </button>
                  </div>
                </div>
              </div>`;

if (html.includes('punitpawar.stonic@upi')) {
  html = html.replace(upiBlockOld, upiBlockNew);
  html = html.replace("copyText('punitpawar.stonic@upi', 'UPI ID copied to clipboard!')", "copyText('9356791463-2@ybl', 'PhonePe UPI ID copied!')");
  html = html.replace("<span>Copy UPI ID (punitpawar.stonic@upi)</span>", "<span>Copy PhonePe UPI (9356791463-2@ybl)</span>");
}

// Update bank note
html = html.replace('<div class="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">\n              <span class="text-gray-400">Account No:</span>', '<div class="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">\n              <span class="text-gray-400">Account Status:</span>\n              <span class="text-amber-400 font-mono text-xs">Direct UPI Recommended</span>\n            </div>\n            <div class="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between hidden">\n              <span class="text-gray-400">Account No:</span>');

// Update email
html = html.replace(/support@stonicai\.com/g, 'stonicai421@gmail.com');

fs.writeFileSync(filePath, html, 'utf8');
console.log('checkout.html updated successfully with PhonePe & Paytm UPI!');
