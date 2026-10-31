const https = require('https');

https.get('https://developers.cloudflare.com/workers/static-assets/binding/', res => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    const tomlMatch = body.match(/```toml([\s\S]*?)```/g);
    if (tomlMatch) {
      tomlMatch.slice(0, 3).forEach(t => console.log('TOML block:\n', t, '\n---'));
    } else {
      console.log('No toml block found');
    }
  });
}).on('error', console.error);
