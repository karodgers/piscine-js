const sums = (num) => {
    if (num === 0 || num === 1) {
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
            partitions[partitions.length] = partition;
            return;
        }

        for (i = 1; i <= max && i <= target; i++) {
            current[current.length] = i;
            findPartitions(target - i, i);
            current.length = current.length - 1;
        }
    };

    findPartitions(num, num);
    return partitions;
};
