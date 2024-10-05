const sameAmount = (str, reg1, reg2)=> {

  let count1 = 0
  let parts1 = str.split(reg1)

  count1 = parts1.length - 1

  let count2 = 0
  let parts2 = str.split(reg2)

  count2 = parts2.length - 1

  return count1 === count2
}