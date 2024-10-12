let currentCircle = null; 
const boxSize = { width: 0, height: 0 }; 
let boxElement = null; 

export function setBox() {
    boxElement = document.createElement('div');
    boxElement.classList.add('box');
    document.body.appendChild(boxElement);

    const boxRect = boxElement.getBoundingClientRect();
    boxSize.width = boxRect.width;
    boxSize.height = boxRect.height;
    boxElement.style.position = 'absolute';
    boxElement.style.top = `${(window.innerHeight - boxSize.height) / 2}px`;
    boxElement.style.left = `${(window.innerWidth - boxSize.width) / 2}px`;
}

export function createCircle() {
    document.addEventListener('click', (event) => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.background = 'white';
        circle.style.left = `${event.clientX - 25}px`; 
        circle.style.top = `${event.clientY - 25}px`; 
        document.body.appendChild(circle);
        currentCircle = circle;

        checkCircleInBox(circle);
    });
}

export function moveCircle() {
    document.addEventListener('mousemove', (event) => {
        if (currentCircle) {
            const boxRect = boxElement.getBoundingClientRect();
            const circleRect = currentCircle.getBoundingClientRect();

            let newX = event.clientX - 25; 
            let newY = event.clientY - 25; 

            if (newX < boxRect.left + 1) newX = boxRect.left + 1; 
            if (newX + circleRect.width > boxRect.right - 1) newX = boxRect.right - circleRect.width - 1; 
            if (newY < boxRect.top + 1) newY = boxRect.top + 1; 
            if (newY + circleRect.height > boxRect.bottom - 1) newY = boxRect.bottom - circleRect.height - 1; 

            currentCircle.style.left = `${newX}px`;
            currentCircle.style.top = `${newY}px`;

            checkCircleInBox(currentCircle);
        }
    });
}

function checkCircleInBox(circle) {
    const boxRect = boxElement.getBoundingClientRect();
    const circleRect = circle.getBoundingClientRect();

    const isInside =
        circleRect.left >= boxRect.left &&
        circleRect.right <= boxRect.right &&
        circleRect.top >= boxRect.top &&
        circleRect.bottom <= boxRect.bottom;

    circle.style.background = isInside ? 'var(--purple)' : 'white'; 
}
