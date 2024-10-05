const sameAmount = (str, reg1, reg2) =>{
   
  var count1 = 0;
  var count2 = 0;

  for (var i = 0; i < str.length; i++) {
    if (reg1.test(str[i])) {
      count1++;
    }
  }

  for (var i = 0; i < str.length; i++) {
    if (reg2.test(str[i])) {
      count2++;
    }
  }

  return count1 === count2;
};