let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index <= array.length; index += 1) {
        console.log("\n"+"["+index+"]")
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        console.log(array[secondIndex])
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }