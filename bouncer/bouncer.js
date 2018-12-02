function bouncer(arr) {
  const convertedArr = arr.filter((element) => {
    if (element) return element;
    return null;
  });

  return convertedArr;
}

export { bouncer };
