let brickCount = 0;
let buildInterval;

export function build(numBricks) {

    buildInterval = setInterval(() => {

        if (brickCount < numBricks) {

            brickCount++;

            const brick = document.createElement('div');

            brick.id = `brick-${brickCount}`;

            if (brickCount % 3 === 2) { 

                brick.dataset.foundation = true;
            }
            document.body.appendChild(brick);
        } else {

            clearInterval(buildInterval); 
        }
    }, 100); 
}

export function repair(...ids) {

    ids.forEach(id => {

        const brick = document.getElementById(id);

        if (brick) {

            if (brick.dataset.foundation) {

                brick.dataset.repaired = 'in progress';

            } else {

                brick.dataset.repaired = 'true';
            }
        }
    });
}

export function destroy() {

    const lastBrick = document.querySelector('body > div:last-child');

    if (lastBrick) {

        lastBrick.remove();
    }
};
