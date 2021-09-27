var express = require('express');
var router = express.Router();
var Cat = require('../models/cat')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express for Sogeum AWS' });
});

module.exports = router;
