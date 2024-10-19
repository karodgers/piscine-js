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
    if (promises.length === 0) {
        return Promise.resolve([]);
    }

    if (count === 0) {
        return Promise.resolve(undefined);
    }

    return new Promise((resolve, reject) => {
        const results = [];
        let resolvedCount = 0;
        let settled = false;

        const checkAndResolve = () => {
            if (resolvedCount === count && !settled) {
                settled = true;
                resolve(results);
            }
        };

        promises.forEach((p, index) => {
            Promise.resolve(p)
                .then(value => {
                    if (settled) return;
                    if (resolvedCount < count) {
                        results.push(value);
                        resolvedCount++;
                        checkAndResolve();
                    }
                })
                .catch(error => {
                    if (settled) return;
                    reject(error);
                });
        });
    });
}