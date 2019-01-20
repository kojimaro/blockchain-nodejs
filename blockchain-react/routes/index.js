var express = require('express');
var router = express.Router();
const { blockchain } = require('../controllers/blockchain');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(blockchain);
});

module.exports = router;
