let lastCircle = null;
let box = null;
let isTrapped = false;

export function createCircle() {
  document.addEventListener('click', (event) => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.left = `${event.clientX - 25}px`;
    circle.style.top = `${event.clientY - 25}px`;
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
      let newX = event.clientX - 25;
      let newY = event.clientY - 25;

      if (isTrapped || isCircleInBox(lastCircle, boxRect)) {
        newX = Math.max(boxRect.left + 1, Math.min(newX, boxRect.right - 51));
        newY = Math.max(boxRect.top + 1, Math.min(newY, boxRect.bottom - 51));
        lastCircle.style.background = 'var(--purple)';
        isTrapped = true;
      } else {
        lastCircle.style.background = 'white';
      }

      lastCircle.style.left = `${newX}px`;
      lastCircle.style.top = `${newY}px`;
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