const fs = require('fs');

const js = fs.readFileSync('C:/Users/Punit/Desktop/stonicai-website/assets/index-CMgT0BId.js', 'utf8');

const urls = js.match(/https:\/\/[a-zA-Z0-9_\-\.]+\.supabase\.co/g) || [];
console.log('Supabase URLs in index:', [...new Set(urls)]);

// Also search for VITE_ or env
const envs = js.match(/[a-zA-Z0-9_]+_KEY|[a-zA-Z0-9_]+_URL/g) || [];
console.log('Env variables:', [...new Set(envs)]);
