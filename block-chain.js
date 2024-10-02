const blockChain = (data, prev) => {
  
    if (prev === undefined) {
      prev = { index: 0, hash: '0' };
    }

    var block = {};
  
    block.index = prev.index + 1;
  
    var hashInput = block.index + prev.hash + JSON.stringify(data);
    block.hash = hashCode(hashInput);
  
    block.data = data;
    block.prev = prev;
  
    block.chain = (newData) => blockChain(newData, block);

    return block;
}