const BlockHeader = require('./block-header');
const { calculateHash, isValidHash } = require('./hash');

let blockchain = [];

const generateBlock = message => {
    const previousBlock = getLatestBlock();
    const index = previousBlock.index + 1;
    const previousHash = previousBlock.hash;
    const timestamp = new Date().getTime() / 1000;

    const hash = calculateHash(
        index,
        previousHash,
        timestamp,
        message
    );
    
    return new BlockHeader(
        index,
        previousHash,
        timestamp,
        message,
        hash
    );
}

const addBlock = newBlock => {
    if(!isValidBlock(newBlock, getLatestBlock())) return;
    blockchain.push(newBlock);
}

const getLatestBlock = () => {
    return blockchain[blockchain.length - 1];
}

const isValidBlock = (newBlock, previousBlock) => {
    //ひとつ前のブロックIndexを+1させたとき、
    //新しいブロックIndexと一致していない場合はエラー
    if (previousBlock.index + 1 !== newBlock.index) {
        console.log('invalid index');
        return false;
    }

    //ひとつ前のブロックhashと、
    //新しいブロックに含まれているひとつ前のブロックのハッシュ値が
    //一致していない場合はエラー
    if (previousBlock.hash !== newBlock.previousHash) {
        console.log('invalid previoushash');
        return false;
    }

    //再度新しいブロックのハッシュ値を計算
    //新しいブロックのハッシュ値と一致しなければエラー
    if (!isValidHash(newBlock, newBlock.hash)) {
        console.log('invalid hash');
        return false;
    }
    return true;
}

module.exports = {
    blockchain,
    generateBlock,
    addBlock
}