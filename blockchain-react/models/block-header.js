class BlockHeader {
    constructor(index, previousHash, timestamp, merkleRoot, hash) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp.toString();
        this.merkleRoot = merkleRoot;
        this.hash = hash;
    }
}

module.exports = BlockHeader;