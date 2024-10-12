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
    circle.style.left = `${event.clientX}px`; 
    circle.style.top = `${event.clientY}px`; 
    document.body.appendChild(circle);
    currentCircle = circle;

    checkCircleInBox(circle); 
  });
}

export function moveCircle() {
  document.addEventListener('mousemove', function(event) {
    if (currentCircle) {
      let newX = event.clientX; 
      let newY = event.clientY; 

      const boxRect = boxElement.getBoundingClientRect();
      const circleRect = currentCircle.getBoundingClientRect();

      if (newX < boxRect.left + 1) newX = boxRect.left + 1; 
      if (newX + circleRect.width > boxRect.right - 1) newX = boxRect.right - circleRect.width - 1; // Right wall
      if (newY < boxRect.top + 1) newY = boxRect.top + 1; 
      if (newY + circleRect.height > boxRect.bottom - 1) newY = boxRect.bottom - circleRect.height - 1; // Bottom wall

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
