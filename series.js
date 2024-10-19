const series = async (asyncFunctions) =>  {

    const results = [];
    
    for (const fn of asyncFunctions) {

        const result = await fn(); 

        results.push(result); 
    }
    
    return results; 
}
