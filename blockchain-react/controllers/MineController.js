const { generateBlock, addBlock } = require('./BlockController')
const { sha256 } = require('../utils/hash')
const merkle = require('merkle-lib')

const _convertBuffer = datas => datas.map(data => Buffer.from(data, 'hex'))

const _calculateMerkelTree = buffer => merkle(buffer, sha256)

const mine = messages => {
    let buffer = _convertBuffer(messages)
    const markleTree = _calculateMerkelTree(buffer)

    const newBlock = generateBlock(markleTree[markleTree.length - 1].toString('hex'))

    addBlock(newBlock)

    return newBlock
}

module.exports = {
    mine
}