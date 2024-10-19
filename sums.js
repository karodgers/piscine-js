const sums = (num) => {
    if (num === 0 || num === 1) {
        return [];
    }
    
    const partitions = new Set();
    const current = [];
    
    const findPartitions = (target, max) => {
        if (target === 0) {
            if (current.length > 1 || num === 1) {
                partitions.add(current.slice().sort((a, b) => a - b).join(','));
            }
            return;
        }
        
        for (let i = 1; i <= max && i <= target; i++) {
            current.push(i);
            findPartitions(target - i, i);
            current.pop();
        }
    };
    
    findPartitions(num, num);
    
    return Array.from(partitions).map(partition => partition.split(',').map(Number));
};