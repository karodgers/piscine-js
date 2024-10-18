function interpolation({ step, start, end, callback, duration }) {
   
    const stepSize = (end - start) / step;
    const delay = duration / step;
  
    for (let i = 0; i < step; i++) {
      const distance = start + i * stepSize;
      const point = (i + 1) * delay;
  
      setTimeout(() => {
        callback([distance, point]);
      }, point);
    }
}
