export function pick() {
    const body = document.body;
  
    const hslDiv = document.createElement('div');
    const hueDiv = document.createElement('div');
    const luminosityDiv = document.createElement('div');
  
    hslDiv.classList.add('text', 'hsl');
    hueDiv.classList.add('text', 'hue');
    luminosityDiv.classList.add('text', 'luminosity');
  
    body.appendChild(hslDiv);
    body.appendChild(hueDiv);
    body.appendChild(luminosityDiv);
  
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, 'svg');
    const axisX = document.createElementNS(svgNS, 'line');
    const axisY = document.createElementNS(svgNS, 'line');
  
    axisX.setAttribute('id', 'axisX');
    axisY.setAttribute('id', 'axisY');
  
    svg.appendChild(axisX);
    svg.appendChild(axisY);
    body.appendChild(svg);
  
    body.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const hue = Math.round((x / window.innerWidth) * 360);
      const luminosity = Math.round((y / window.innerHeight) * 100);
  
      const hslValue = `hsl(${hue}, 50%, ${luminosity}%)`;
      
      body.style.backgroundColor = hslValue;
  
      hslDiv.textContent = hslValue;
      hueDiv.textContent = `Hue: ${hue}`;
      luminosityDiv.textContent = `Luminosity: ${luminosity}%`;
  
      axisX.setAttribute('x1', x);
      axisX.setAttribute('x2', x);
      axisX.setAttribute('y1', 0);
      axisX.setAttribute('y2', window.innerHeight);
  
      axisY.setAttribute('x1', 0);
      axisY.setAttribute('x2', window.innerWidth);
      axisY.setAttribute('y1', y);
      axisY.setAttribute('y2', y);
    });
  
    body.addEventListener('click', () => {
      const hslValue = hslDiv.textContent;
      navigator.clipboard.writeText(hslValue).then(() => {
        alert(`Copied to clipboard: ${hslValue}`);
      });
    });
}
  