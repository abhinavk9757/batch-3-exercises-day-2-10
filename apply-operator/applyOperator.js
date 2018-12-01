
function applyOperator(...args) {
  const index = 1;
  const operatorIndex = 0;
  if (!args[operatorIndex]) {
    throw new Error();
  }
  if (!args[index]) { return 0; }

  // if (args.length === 2) { return args[1]; }
  let result;
  switch (args[0]) {
    case '+':
      result = 0;
      for (let i = 1; i < args.length; i += 1) result += args[i];
      return result;

    case '-':
      result = 0;
      for (let i = 1; i < args.length; i += 1) result -= args[i];
      return result;


    case '*':
      result = 1;
      for (let i = 1; i < args.length; i += 1) result *= args[i];
      return result;
    case '/':
      result = args[index];
      for (let i = 2; i < args.length; i += 1) result /= args[i];
      result = Math.round(result * 10000) / 10000;
      return result;
    case '%':
      result = args[index];
      for (let i = 2; i < args.length; i += 1) result %= args[i];
      return result;
    default:
      return result;
  }
}


export {
  applyOperator,
};
