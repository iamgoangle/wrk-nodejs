const express = require('express');
const morgan = require('morgan');
const moment = require('moment');

const app = express();

app.use(morgan('dev'));

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

app.get('/perf', async (req, res) => {
  await sleep(100);
  res.json({ resp: true });
});

app.listen(8080, () => {
  console.log('App listen on port 8080');
});