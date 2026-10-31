const https = require('https');

https.get('https://developers.cloudflare.com/workers/static-assets/binding/', res => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    const lines = body.split('\n').filter(l => l.includes('assets') || l.includes('wrangler.toml') || l.includes('directory'));
    console.log(lines.slice(0, 15).join('\n'));
  });
}).on('error', console.error);
