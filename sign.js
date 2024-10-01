const sign = (num) =>{
    if (num === 0){
        return 0;
    }else if (num>0){
        return 1;
    }else if (num<0){
        return -1;
    }
};
const sameSign = (num1, num2) =>{
    if ((num1<0 && num2<0) || (num1>0 && num2>0)|| (num1===0 && num2===0)){
        return true;
    }
    return false;
};