const chunk = (arr, size) =>{
    const result = [];

    for (let i = 0; i<arr.length; i = i+ size){
        const subArray = arr.slice(i, i + size);
        result.push(subArray);
    }
    return result
}