export function compose() {

    const body = document.body;
  
    function getColorFromKey(key) {

      let colorNumber = key.charCodeAt(0) * 10;

      return `hsl(${colorNumber % 360}, 70%, 60%)`;
    }
  
    document.addEventListener('keydown', function(event) {

      const keyPressed = event.key;
  
      if (keyPressed >= 'a' && keyPressed <= 'z') {

        let noteDiv = document.createElement('div');

        noteDiv.className = 'note';

        noteDiv.style.backgroundColor = getColorFromKey(keyPressed);

        noteDiv.innerText = keyPressed;

        body.appendChild(noteDiv);
      }
  
      if (keyPressed === 'Backspace') {

        let allNotes = document.querySelectorAll('.note');

        if (allNotes.length > 0) {

          body.removeChild(allNotes[allNotes.length - 1]);

        }
      }
  
      if (keyPressed === 'Escape') {

        let allNotes = document.querySelectorAll('.note');
        
        allNotes.forEach(note => body.removeChild(note));
      }
    });
}