const { createHash } = require('crypto');

const calculateHash = (index, previousHash, timestamp, message) => {
    return createHash('sha256')
    .update(
        index.toString(),
        previousHash, 
        timestamp.toString(), 
        message
    )
    .digest('hex');
}

const isValidHash = (block, proofHash) => {
    const hash = calculateHash(
        block.index,
        block.previousHash, 
        block.timestamp,
        block.messag
    );

    return proofHash === hash ? true : false;
}

module.exports = { 
    calculateHash,
    isValidHash
}