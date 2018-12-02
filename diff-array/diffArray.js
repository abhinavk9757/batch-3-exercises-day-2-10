function findInArray(arr, val) {
  for (let i = 0; i < arr.length; i += 1) if (arr[i] === val) return true;
  return false;
}
function diffArray(arr1, arr3) {
  if (arr1.length === 0) return arr3;
  if (arr3.length === 0) return arr1;
  const fileteredArr = arr1.filter((element) => {
    if (!findInArray(arr3, element)) return element;
    return null;
  });

  const fileteredArr3 = arr3.filter((element) => {
    if (!findInArray(arr1, element)) return element;
    return null;
  });

  return fileteredArr.concat(fileteredArr3);
}

export { diffArray };
