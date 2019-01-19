const express = require('express');
const bodyParser = require('body-parser');
const GenesisBlock = require('./genesis-block');

const { 
    blockchain,
    generateBlock,
    addBlock
} = require('./blockchain');

const initHttpServer = () => {
    let app = express();
    app.use(bodyParser.json())

    app.get('/', (req, res) => {
        res.send(blockchain);
    });

    app.post('/mine', (req, res) => {
        let newBlock = generateBlock(req.body.message);
        addBlock(newBlock);
        console.log('block added: ' + JSON.stringify(newBlock));
        res.send();
    });

    app.listen(3000, () => console.log('listening on port 3000!'));
}

blockchain.push(new GenesisBlock(new Date().getTime() / 1000));
initHttpServer();