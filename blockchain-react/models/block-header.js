class BlockHeader {
    constructor(index, previousHash, timestamp, message, hash) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp.toString();
        this.message = message;
        this.hash = hash;
    }
}

module.exports = BlockHeader;