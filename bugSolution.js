const express = require('express');
const app = express();

// Use express.json() with appropriate limit and error handling
app.use(express.json({ limit: '50mb', type: '*/*' })); // Increase limit and accept any content type

app.post('/user', (req, res) => {
  console.log(req.body);
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({ error: 'Empty request body' });
    }
    // Process req.body
    res.send('OK');
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).send({ error: 'Invalid JSON' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});