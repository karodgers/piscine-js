let circle = null;
let box = null;

export function setBox() {
  box = document.createElement('div');
  box.className = 'box';
  document.body.appendChild(box);
  box.style.position = 'absolute';
  box.style.top = '50%';
  box.style.left = '50%';
  box.style.transform = 'translate(-50%, -50%)';
}

export function createCircle() {
  document.addEventListener('click', function(event) {
    circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.background = 'white';
    circle.style.left = (event.clientX - 25) + 'px';
    circle.style.top = (event.clientY - 25) + 'px';
    document.body.appendChild(circle);
    checkCircleInBox();
  });
}

export function moveCircle() {
  document.addEventListener('mousemove', function(event) {
    if (circle) {
      let x = event.clientX - 25;
      let y = event.clientY - 25;
      
      let boxPos = box.getBoundingClientRect();
      let circlePos = circle.getBoundingClientRect();
      
      if (x < boxPos.left) x = boxPos.left;
      if (x + circlePos.width > boxPos.right) x = boxPos.right - circlePos.width;
      if (y < boxPos.top) y = boxPos.top;
      if (y + circlePos.height > boxPos.bottom) y = boxPos.bottom - circlePos.height;
      
      circle.style.left = x + 'px';
      circle.style.top = y + 'px';
      checkCircleInBox();
    }
  });
}

function checkCircleInBox() {
  let boxPos = box.getBoundingClientRect();
  let circlePos = circle.getBoundingClientRect();
  
  let inside = 
    circlePos.left >= boxPos.left &&
    circlePos.right <= boxPos.right &&
    circlePos.top >= boxPos.top &&
    circlePos.bottom <= boxPos.bottom;
  
  circle.style.background = inside ? 'var(--purple)' : 'white';
}