// const http = require('http');
const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
  console.log('This Always runs');
  next();
});

app.use('/add-product', (req, res, next) => {
  console.log('Add Product middleware!');
  res.send('<h1>The "Add Product" Page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In the anothet middleware!');
  res.send('<h1>Hallo from Express</h1>');
});

app.listen(3000);
