let lastCircle = null;
let box = null;
let isTrapped = false;

export function createCircle() {
  document.addEventListener('click', (event) => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    updateCirclePosition(circle, event.clientX, event.clientY);
    circle.style.background = 'white';
    document.body.appendChild(circle);
    lastCircle = circle;
    isTrapped = false;
  });
}

export function moveCircle() {
  document.addEventListener('mousemove', (event) => {
    if (lastCircle) {
      const boxRect = box.getBoundingClientRect();
      let newX = event.clientX;
      let newY = event.clientY;

      if (isTrapped || isCircleInBox(lastCircle, boxRect)) {
        newX = Math.max(boxRect.left + 26, Math.min(newX, boxRect.right - 26));
        newY = Math.max(boxRect.top + 26, Math.min(newY, boxRect.bottom - 26));
        lastCircle.style.background = 'var(--purple)';
        isTrapped = true;
      } else {
        lastCircle.style.background = 'white';
      }

      updateCirclePosition(lastCircle, newX, newY);
    }
  });
}

export function setBox() {
  box = document.createElement('div');
  box.className = 'box';
  document.body.appendChild(box);
  
  const centerBox = () => {
    const boxRect = box.getBoundingClientRect();
    box.style.left = `${(window.innerWidth - boxRect.width) / 2}px`;
    box.style.top = `${(window.innerHeight - boxRect.height) / 2}px`;
  };

  centerBox();
  window.addEventListener('resize', centerBox);
}

function isCircleInBox(circle, boxRect) {
  const circleRect = circle.getBoundingClientRect();
  return (
    circleRect.left >= boxRect.left + 1 &&
    circleRect.right <= boxRect.right - 1 &&
    circleRect.top >= boxRect.top + 1 &&
    circleRect.bottom <= boxRect.bottom - 1
  );
}

function updateCirclePosition(circle, x, y) {
  circle.style.left = `${x - 25}px`;
  circle.style.top = `${y - 25}px`;
}