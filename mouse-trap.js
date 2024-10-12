let currentCircle = null;
let boxElement = null;

export function setBox() {
  boxElement = document.createElement('div');
  boxElement.classList.add('box');
  document.body.appendChild(boxElement);
  boxElement.style.position = 'absolute';
  boxElement.style.top = '50%';
  boxElement.style.left = '50%';
  boxElement.style.transform = 'translate(-50%, -50%)';
}

export function createCircle() {
  document.addEventListener('click', function(event) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.background = 'white';
    circle.style.position = 'absolute';
    
    const bodyRect = document.body.getBoundingClientRect();
    
    const left = event.clientX - bodyRect.left;
    const top = event.clientY - bodyRect.top;
    
    circle.style.left = `${left}px`;
    circle.style.top = `${top}px`;
    
    document.body.appendChild(circle);
    currentCircle = circle;
    checkCircleInBox(circle);
  });
}

export function moveCircle() {
  document.addEventListener('mousemove', function(event) {
    if (currentCircle) {
      const bodyRect = document.body.getBoundingClientRect();
      let newX = event.clientX - bodyRect.left;
      let newY = event.clientY - bodyRect.top;
      
      const boxRect = boxElement.getBoundingClientRect();
      const circleRect = currentCircle.getBoundingClientRect();
      
      if (newX < boxRect.left - bodyRect.left + 1) newX = boxRect.left - bodyRect.left + 1;
      if (newX + circleRect.width > boxRect.right - bodyRect.left - 1) newX = boxRect.right - bodyRect.left - circleRect.width - 1;
      if (newY < boxRect.top - bodyRect.top + 1) newY = boxRect.top - bodyRect.top + 1;
      if (newY + circleRect.height > boxRect.bottom - bodyRect.top - 1) newY = boxRect.bottom - bodyRect.top - circleRect.height - 1;
      
      currentCircle.style.left = `${newX}px`;
      currentCircle.style.top = `${newY}px`;
      checkCircleInBox(currentCircle);
    }
  });
}

function checkCircleInBox(circle) {
  const boxRect = boxElement.getBoundingClientRect();
  const circleRect = circle.getBoundingClientRect();
  const isInside = (
    circleRect.left >= boxRect.left &&
    circleRect.right <= boxRect.right &&
    circleRect.top >= boxRect.top &&
    circleRect.bottom <= boxRect.bottom
  );
  circle.style.background = isInside ? 'var(--purple)' : 'white';
}