const getJSON = async (path, params = {}) => {
    
    const url = new URL(path);
    
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  
    try {

      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(response.statusText); 
      }
  
      const result = await response.json();
  
      if (result.error) {
        throw new Error(result.error); 
      }
  
      return result.data;
  
    } catch (error) {

      throw new Error(error.message);
    }
}
  