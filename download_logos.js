const fs = require('fs');
const https = require('https');

const files = {
  'aws.svg': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  'azure.svg': 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
  'gcp.svg': 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg'
};

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
};

for (const [name, url] of Object.entries(files)) {
  const file = fs.createWriteStream("d:/netsmartz/public/" + name);
  https.get(url, options, function(response) {
    if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
      https.get(response.headers.location, options, function(res) {
        res.pipe(file);
        file.on('finish', () => { file.close(); console.log(`Downloaded ${name} via redirect`); });
      });
    } else {
      response.pipe(file);
      file.on('finish', function() {
        file.close();
        console.log(`Downloaded ${name}`);
      });
    }
  }).on('error', function(err) {
    fs.unlink("d:/netsmartz/public/" + name, () => {});
    console.error(`Error downloading ${name}: ${err.message}`);
  });
}
