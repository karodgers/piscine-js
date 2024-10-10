export const getArchitects = () => {

    const architects = document.getElementsByTagName('a');

    const nonArchitects = document.getElementsByTagName('span');
  
    return [
      Array.from(architects), 
      Array.from(nonArchitects) 
    ];
};
  
export const getClassical = () => {

    const classical = Array.from(document.querySelectorAll('a.classical'));

    const nonClassical = Array.from(document.querySelectorAll('a:not(.classical), span'));
  
    return [classical, nonClassical];
};
  
export const getActive = () => {

    const activeClassical = Array.from(document.querySelectorAll('a.classical.active'));

    const nonActiveClassical = Array.from(document.querySelectorAll('a.classical:not(.active)'));
  
    return [activeClassical, nonActiveClassical];
};
  
export const getBonannoPisano = () => {
    
    const bonannoPisano = document.getElementById('BonannoPisano');
    
    const remainingActiveClassical = Array.from(document.querySelectorAll('a.classical.active')).filter(architect => architect.id !== 'BonannoPisano');
  
    return [bonannoPisano, remainingActiveClassical];
};


  