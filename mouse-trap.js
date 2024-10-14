let lastCircle = null;
let box = null;

export function createCircle() {
  document.addEventListener('click', (event) => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    updateCirclePosition(circle, event.clientX, event.clientY);
    
    const boxRect = box.getBoundingClientRect();
    if (isCircleInBox(event.clientX, event.clientY, boxRect)) {
      circle.style.background = 'var(--purple)';
    } else {
      circle.style.background = 'white';
    }
    
    document.body.appendChild(circle);
    lastCircle = circle;
  });
}

export function moveCircle() {
  document.addEventListener('mousemove', (event) => {
    if (lastCircle) {
      const boxRect = box.getBoundingClientRect();
      let newX = event.clientX;
      let newY = event.clientY;

      if (lastCircle.style.background === 'var(--purple)') {
        newX = Math.max(boxRect.left + 26, Math.min(newX, boxRect.right - 26));
        newY = Math.max(boxRect.top + 26, Math.min(newY, boxRect.bottom - 26));
      } else if (isCircleInBox(newX, newY, boxRect)) {
        lastCircle.style.background = 'var(--purple)';
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

function isCircleInBox(x, y, boxRect) {
  return (
    x >= boxRect.left + 26 &&
    x <= boxRect.right - 26 &&
    y >= boxRect.top + 26 &&
    y <= boxRect.bottom - 26
  );
}

function updateCirclePosition(circle, x, y) {
  circle.style.left = `${x - 25}px`;
  circle.style.top = `${y - 25}px`;
}