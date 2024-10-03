const round = (num)=>{
    if (num >= 0) {
        return (num + 0.5) | 0;
    } else {
        return (num - 0.5) | 0;
    }

}
const ceil = (num)=>{
    if (num > 0) {
        let intPart = num | 0;
        if (num !== intPart) {
            return intPart + 1;
        } else {
            return intPart;
        }
    } else {
        return num | 0;
    }

}
const floor = (num) =>{
    if (num >= 0) {
        return num | 0;
    } else {
        let intPart = num | 0;
        if (num !== intPart) {
            return intPart - 1;
        } else {
            return intPart;
        }
    }

}
const trunc = (num) =>{

    if (num >= 0) {
        return num | 0;
    } else {
        return num | 0;
    }
}

