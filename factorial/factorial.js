function factorial(args) {
  let num = 1;
  let counter = args;
  while (counter > 1) {
    num *= counter;
    counter -= 1;
  }
  return num;
}

export { factorial };
