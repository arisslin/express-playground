import * as express from 'express';
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use('/post-json/', express.json());

app.post('/post-json/', (req, res) => {
  console.log('POST Request: ' + req.url);
  console.log(req.body);

  res.type('text');
  res.status(200);
  res.send('POST JSON DONE!');
});

app.use('/post-raw/', express.raw());

app.post('/post-raw/', (req, res) => {
  console.log('POST Request: ' + req.url);
  console.log(req.body.toString());

  res.type('text');
  res.status(200);
  res.send('POST RAW DONE!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
