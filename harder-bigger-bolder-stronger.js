export function generateLetters() {

    const container = document.body; 

    const totalLetters = 120;

    const lettersPerSection = Math.ceil(totalLetters / 3); 

    for (let i = 0; i < totalLetters; i++) {

        const letterDiv = document.createElement('div'); 

        const randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
        
        letterDiv.style.fontSize = `${11 + (i * (130 - 11) / (totalLetters - 1))}px`; 

        if (i < lettersPerSection) {

            letterDiv.style.fontWeight = '300'; 

        } else if (i < lettersPerSection * 2) {

            letterDiv.style.fontWeight = '400'; 

        } else {

            letterDiv.style.fontWeight = '600'; 
        }

        letterDiv.textContent = randomLetter;
         
        container.appendChild(letterDiv); 
    }
}
