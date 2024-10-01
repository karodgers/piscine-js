const num = (value) => {
    return typeof value === 'number' && !isNaN(value);
}

const nan = (value) =>{
    return Number.isNaN(value);
}

const str = (value) => {
    return typeof value === 'string';
}

const bool = (value) => {
    return typeof value === 'boolean';
}

const undef = (value) => {
    return typeof value === 'undefined';
}

const def = (value)=> {
    return typeof value !== 'undefined';
}

const arr = (value) => {
    return Array.isArray(value);
}

const obj = (value) => {
    return value !== null && typeof value === 'object';
}

const fun = (value) => {
    return typeof value === 'function';
}

const truthy = (value) => {
    return !!value;
}

const falsy = (value) => {
    return !value;
}

