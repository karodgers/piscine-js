const getJSON = async (path, params = {}) => {

    const url = new URL(path);

    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  
    try {

      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      const jsonData = await response.json();
  
      if (jsonData.error) {
        throw new Error(jsonData.error);
      }
  
      if (jsonData.data) {
        return jsonData.data;
      }
  
      throw new Error(error);
      
    } catch (error) {

      throw error;
    }
};