export function pick() {
  const body = document.body;
  const hslDiv = document.createElement('div');
  hslDiv.className = 'hsl';
  body.appendChild(hslDiv);

  const hueDiv = document.createElement('div');
  hueDiv.className = 'hue text';
  body.appendChild(hueDiv);

  const luminosityDiv = document.createElement('div');
  luminosityDiv.className = 'luminosity text';
  body.appendChild(luminosityDiv);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  body.appendChild(svg);

  const axisX = document.createElementNS("http://www.w3.org/2000/svg", "line");
  axisX.id = 'axisX';
  axisX.setAttribute('y1', '0');
  axisX.setAttribute('y2', '100%');
  svg.appendChild(axisX);

  const axisY = document.createElementNS("http://www.w3.org/2000/svg", "line");
  axisY.id = 'axisY';
  axisY.setAttribute('x1', '0');
  axisY.setAttribute('x2', '100%');
  svg.appendChild(axisY);

  function updateColor(event) {
    const x = event.clientX;
    const y = event.clientY;
    const hue = Math.round((x / window.innerWidth) * 360);
    const luminosity = Math.round(100 - (y / window.innerHeight) * 100);
    const hslValue = `hsl(${hue}, 50%, ${luminosity}%)`;

    body.style.background = hslValue;
    hslDiv.textContent = hslValue;
    hueDiv.textContent = `hue\n${hue}`;
    luminosityDiv.textContent = `luminosity\n${luminosity}`;

    axisX.setAttribute('x1', x);
    axisX.setAttribute('x2', x);
    axisY.setAttribute('y1', y);
    axisY.setAttribute('y2', y);
  }

  body.addEventListener('mousemove', updateColor);

  body.addEventListener('click', () => {
    navigator.clipboard.writeText(hslDiv.textContent)
      .then(() => console.log('HSL value copied to clipboard'))
      .catch(err => console.error('Failed to copy: ', err));
  });
}