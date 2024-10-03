const slice = (arrOrString, startingIndex, optionalEndingIndex) => {
  
  let result = [];
  let length = arrOrString.length;
  let start = startingIndex;
  let end = optionalEndingIndex;

  if (start < 0) {
    start = length + start;
  }
  if (start < 0) {
    start = 0;
  }

  if (end === undefined) {
    end = length;
  } else if (end < 0) {
    end = length + end;
  }
  if (end > length) {
    end = length;
  }

  let resultIndex = 0;
  for (let i = start; i < end; i++) {
    result[resultIndex] = arrOrString[i];
    resultIndex = resultIndex + 1;
  }

  if (typeof arrOrString === 'string') {
    let resultString = '';
    for (let i = 0; i < result.length; i++) {
      resultString = resultString + result[i];
    }
    return resultString;
  }

  return result;
};