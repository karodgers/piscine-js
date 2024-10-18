async function queryServers(serverName, q) {
    const url1 = `/` + serverName + `?q=` + q;
    const url2 = `/` + serverName + `_backup?q=` + q;
    
    return Promise.race([getJSON(url1), getJSON(url2)]);
  }
  
  async function gougleSearch(q) {
    const timeout = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('timeout')), 80)
    );
  
    const promises = {
      web: queryServers('web', q),
      image: queryServers('image', q),
      video: queryServers('video', q)
    };
  
    try {
      const result = await Promise.race([
        Promise.all([
          promises.web,
          promises.image,
          promises.video
        ]).then(([web, image, video]) => ({ web, image, video })),
        timeout
      ]);
  
      return result;
    } catch (error) {
      throw error;
    }
  }
  