const sameAmount = (str, reg1, reg2) => {
    let count1 = 0;
    let count2 = 0;
  
    let match;
    while ((match = reg1.exec(str)) !== null) {
      count1++;
    }
  
    while ((match = reg2.exec(str)) !== null) {
      count2++;
    }
  
    return count1 === count2;
};
