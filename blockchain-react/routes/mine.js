var express = require('express');
var router = express.Router();
const { 
    generateBlock,
    addBlock
} = require('../controllers/blockchain');

router.post('/', function(req, res, next) {
    const newBlock = generateBlock(req.body.message);
    addBlock(newBlock);
    res.send(newBlock);
    console.log('block added: ' + JSON.stringify(newBlock));
});

module.exports = router;
