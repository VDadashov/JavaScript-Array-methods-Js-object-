function arrayLastElementThree(arr, n) {
    for (let i = 0; i < n; i++) {
      const lastThree = arr.slice(-3);
      const sumOfLastThree = lastThree.reduce((a, b) => a + b, 0);
      arr.push(sumOfLastThree);
    }
    return arr;
  }
  
  
  
  const myArray = [1, 2, 3, 4, 5];
  const n = 3;
  const result = arrayLastElementThree(myArray, n);
  console.log(result);
  
  