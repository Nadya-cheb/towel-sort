
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let new_array = [];
  if (Array.isArray(matrix)) {
    matrix.forEach((element, index) => {
      if (index % 2 !== 0) {
        element.reverse();
      }
      for (let key of element) {
        new_array.push(key);
      }
    });
  }  
  return new_array;
}

