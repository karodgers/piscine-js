function race(promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            let p = promises[i];
            if (p instanceof Promise) {
                p.then(resolve).catch(reject);
            } else {
                resolve(p);
            }
        }
    });
}

function some(promises, count) {
    if (promises.length === 0 || count < 1) {
        return Promise.resolve([]);
    }

    return new Promise((resolve, reject) => {
        const results = new Array(promises.length);
        let resolvedCount = 0;
        let settled = false;

        const checkAndResolve = () => {
            if (resolvedCount === count && !settled) {
                settled = true;
                resolve(results.slice(0, promises.length).filter(v => v !== undefined));
            }
        };

        promises.forEach((p, index) => {
            Promise.resolve(p)
                .then(value => {
                    if (settled) return;
                    results[index] = value;
                    resolvedCount++;
                    checkAndResolve();
                })
                .catch(() => {
                    if (settled) return;
                    resolvedCount++;
                    checkAndResolve();
                });
        });
    });
}