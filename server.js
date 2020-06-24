require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 5678;
const villainRouter = require('./routes/villain-router');

app.set('view engine', 'ejs');

app.use('/villains', villainRouter);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
