// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const PORT = 8000;
const isFriday = require('date-fns/is_friday');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

// my second endpoint
app.get('/api/timestamp/', (req, res) => {
  const date = new Date(2018, 8, 31);
  const today = isFriday(date);
  res.json({ isFriday: today });
});

// listen for requests :)
const listener = app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
