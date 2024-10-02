const arrToSet = (arr) =>{
    return new Set(arr);

};
const arrToStr = (arr) =>{
    return arr.join('');
};
const setToArr = (set) =>{
    return Array.from(set);
};
const setToStr = (set) =>{
    return Array.from(set).join('');

};
const strToArr = (str) =>{
    return str.split('');

};
const strToSet = (str) =>{
    return new Set(str);

};
const mapToObj = (map) =>{
    return Object.fromEntries(map);

};
const objToArr = (obj) =>{
    return Object.values(obj);

};
const objToMap = (obj) =>{
    return new Map(Object.entries(obj));

};
const arrToObj = (arr) =>{
    return Object.assign({},arr);

}
const strToObj = (str) =>{
    return Object.assign({}, str)

}
const supperTypeOf = (n) =>{

}

const superTypeOf = (value) => {
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  if (value instanceof Map) return 'Map';
  if (value instanceof Set) return 'Set';
  if (Array.isArray(value)) return 'Array';
  return value.constructor.name;
};