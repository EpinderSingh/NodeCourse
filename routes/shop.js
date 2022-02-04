//Node modules
const path = require('path');

//Third party Modules
const express = require('express');

//Internal Modules
const router = express.Router();
const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
