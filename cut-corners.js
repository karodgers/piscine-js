const round = (num) => {
  if (num >= 0) {

    return floor(num + 0.5);

  } else {
    
    return ceil(num - 0.5);
  }
};
  
const ceil = (num) => {
  let intPart = floor(num);

  if (num > intPart) {

    return intPart + 1;
  }

  return intPart;
};
  
const floor = (num) => {
  if (num >= 0) {

    return trunc(num);

  } else {

    let truncated = trunc(num);

    if (num < truncated) {

      return truncated - 1;

    }
    return truncated;
  }
};
  
const trunc = (num) => {
  
  if (num >= 0) {
    let result = 0;
    let step = 1;

    while (result + step <= num) {
      result += step;
      step += step;
    }

    step = step / 2;

    while (step >= 1) {
      if (result + step <= num) {
        result += step;
      }
      step = step / 2;
    }

    return result;

  } else {

    let result = 0;
    let step = 1;
    while (result - step >= num) {
      result -= step;
      step += step;
    }

    step = step / 2;

    while (step >= 1) {

      if (result - step >= num) {
        result -= step;
      }

      step = step / 2;
    }

    return result;
  }
};