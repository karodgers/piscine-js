const getJSON = async (path, params = {}) => {
    
    const queryString = new URLSearchParams(params).toString();

    const url = queryString ? `${path}?${queryString}` : path;
  
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
  