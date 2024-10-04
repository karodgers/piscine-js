const sums = (num) => {
    if (num === 0) {
        return [];
    }

    var partitions = [];
    var current = [];
    var i, j;

    const findPartitions = (target, max) => {
        if (target === 0) {
            var partition = [];
            for (j = 0; j < current.length; j++) {
                partition[j] = current[j];
            }
            partitions.push(partition);
            return;
        }

        for (i = 1; i <= max && i <= target; i++) {
            current.push(i);
            findPartitions(target - i, i);
            current.pop();
        }
    };

    findPartitions(num, num);
    return partitions;
};
