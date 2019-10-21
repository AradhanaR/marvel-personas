const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const request = require('request');
const crypto = require('crypto');
require('dotenv').config();

const app = express();

app.use(morgan('combined'));
app.use(cors());

// Serve the front-end as static files.
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'));

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

// Setup a proxy. It will replace NODE_URL/api/<REQUEST_URL> to ENDPOINT/<REQUEST_URL>?AUTH_PARAMS
const API_ENDPOINT = process.env.API_ENDPOINT;
const API_KEY = process.env.API_KEY;
const API_PRIVATE_KEY = process.env.API_PRIVATE_KEY;

if (API_ENDPOINT && API_KEY && API_PRIVATE_KEY) {
  app.get('/api/*', (req, res) => {
    const timestamp = Date.now();
    const apiCalled = req.url.replace(/\/api/gi, '');
    const hash = crypto.createHash('md5').update(`${timestamp}${API_PRIVATE_KEY}${API_KEY}`).digest('hex');
    const apiURL = `${API_ENDPOINT}${apiCalled}?ts=${timestamp}&apikey=${API_KEY}&hash=${hash}`;
    console.log(`API to be called - ${apiURL}`);

    request(apiURL, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        console.log(`Returned error - ${body}`);
        const bodyObj = JSON.parse(body);
        // For error, server returns the message with full URL containing private key.
        // So the error message is stripped from the response.
        delete bodyObj.message;
        res.send(JSON.stringify(bodyObj));
      }
      else {
        res.send(body);
      }
    });
  });
}
else {
  console.error('Environment variables not set. Proxy is NOT registered.');
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
