import { colors } from './fifty-shades-of-cold.data.js';

export function generateClasses() {

    const styleTag = document.createElement('style');

    document.head.appendChild(styleTag);  

    for (let i = 0; i < colors.length; i++) {
        
        const color = colors[i];
        
        const cssRule = '.' + color + ' { background: ' + color + '; }';
        
        styleTag.appendChild(document.createTextNode(cssRule));
    }
};


export function generateColdShades() {

    const coldShades = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];

    for (let i = 0; i < colors.length; i++) {

        const color = colors[i];
        
        for (let j = 0; j < coldShades.length; j++) {

            if (color.includes(coldShades[j])) {

                const div = document.createElement('div');

                div.className = color;  

                div.textContent = color;  
                
                document.body.appendChild(div);

                break;  
            }
        }
    }
};

export function choseShade(selectedShade) {

    const allDivs = document.querySelectorAll('div');
  
  for (let i = 0; i < allDivs.length; i++) {

    allDivs[i].className = selectedShade;

  }
}
