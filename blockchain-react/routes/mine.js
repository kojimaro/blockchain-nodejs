var express = require('express')
var router = express.Router()
const { mine } = require('../controllers/MineController')

router.post('/', function(req, res, next) {
    const messages = req.body.messages
    const newBlock = mine(messages)
    res.send(newBlock)
    console.log('block added: ' + JSON.stringify(newBlock))
});

module.exports = router;