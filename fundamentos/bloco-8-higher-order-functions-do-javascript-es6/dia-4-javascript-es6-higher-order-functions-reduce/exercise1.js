const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(matriz) {
    const result = matriz.reduce((acc, value) => acc.concat(value), []);
    return result;
    }
  console.log(flatten(arrays));