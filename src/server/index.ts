import * as express from 'express';
import { Request, Response } from 'express';
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use('/post-json/', express.json());

app.post('/post-json/', (req, res) => {
  logPostRequest(req);
  sendResponse200(res, 'POST JSON DONE!');
});

app.use('/post-raw/', express.raw());

app.post('/post-raw/', (req, res) => {
  logPostRequest(req);
  sendResponse200(res, 'POST RAW DONE!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function logPostRequest(req: Request): void {
  console.log('POST Request: ' + req.url);
  console.log(req.body);
}

function sendResponse200(res: Response, body: string): void {
  res.type('text');
  res.status(200);
  res.send(body);
}
