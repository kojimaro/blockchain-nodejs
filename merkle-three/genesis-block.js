const { calculateHash } = require('./hash');

class GenesisBlock {
    constructor(timestamp) {
        this.index = 0;
        this.previousHash = "0000000000000000000";
        this.timestamp = timestamp.toString();
        this.message = "The Genesis Block."
        this.hash = calculateHash(
            this.index,
            this.previousHash,
            this.timestamp,
            this.message
        );
    }
}

module.exports = GenesisBlock;