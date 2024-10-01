const words = (str) =>{
    const requiredArray = str.split(" ");
    return requiredArray;
};
const sentence = (arr) =>{
    return arr.join(" ");
};
const yell = (str) =>{
    return str.toUpperCase();
};
const whisper = (str) =>{
    const lowerStr = str.toLowerCase();
    const result = "*" + lowerStr + "*"
    return result
};
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1, str.length - 1).toLowerCase();
}