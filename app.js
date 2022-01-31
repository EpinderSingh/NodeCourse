//Third party modules
const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
  console.log('In  middelware');
  res.send('<h1>Hello from add-products PAGE!</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In ANOTHER middelware');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
