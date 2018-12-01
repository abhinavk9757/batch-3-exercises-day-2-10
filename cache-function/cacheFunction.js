
function cacheFunction(foo) {
  const arr = [];
  const frstElement = 0;
  return (...args) => {
    const frstArgument = args[frstElement];
    if (!arr[frstArgument]) {
      arr[frstArgument] = foo(frstArgument);
    }
    return arr[frstArgument];
  };
}

export {
  cacheFunction,
};
