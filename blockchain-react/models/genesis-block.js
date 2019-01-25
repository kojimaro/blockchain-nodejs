const { calculateHash } = require('../utils/hash');

class GenesisBlock {
    constructor(timestamp) {
        this.index = 0;
        this.previousHash = "0000000000000000000";
        this.timestamp = timestamp.toString();
        this.merkeleRoot = "0000000000000000000"
        this.hash = calculateHash(
            this.index,
            this.previousHash,
            this.timestamp,
            this.merkeleRoot
        );
    }
}

module.exports = GenesisBlock;