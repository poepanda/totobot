import express from 'express';
import webHook from './webHook';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/health', (req, res) => {
  res.status(200).send('Totobot is on');
});

app.post('/webhook', webHook);

app.listen(9898, () => {
  console.log('Totobot is on port 9898!');
});
