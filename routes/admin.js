const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
});

router.post('/add-product', (req, res, next) => {
  products.push({ pageTitle: 'Add Product' });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
