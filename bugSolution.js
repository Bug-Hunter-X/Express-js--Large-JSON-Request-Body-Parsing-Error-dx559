const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({ limit: '50mb' })); // Increased limit to 50mb

app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Error parsing JSON:', err);
    return res.status(400).send({ error: 'Invalid JSON' });
  }
  next();
});

app.listen(3000, () => console.log('Server listening on port 3000'));