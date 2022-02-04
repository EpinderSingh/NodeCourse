// Node Modules
const path = require('path');

//Third Party Modules
const express = require('express');
const req = require('express/lib/request');

//Internal Modules
const router = express.Router();
const rootDir = require('../util/path');

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body.title);
  res.redirect('/');
});

module.exports = router;
