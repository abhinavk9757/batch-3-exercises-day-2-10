function rotate(arg1) {
  // eslint-disable-next-line prefer-const
  let arg = arg1;
  const len = arg.length;
  const lelement = arg[len - 1];
  for (let i = 0; i < len - 1; i += 1) {
    arg[i + 1] = arg[i];
  }
  arg[0] = lelement;
  return arg;
}
function rotatedString(arg, arg3) {
  if (arg === arg3) return false;
  let flag = false;
  for (let i = 0; i < arg.length; i += 1) {
    if (rotate(arg) === arg3) flag = true;
  }
  return flag;
}

export { rotatedString };
