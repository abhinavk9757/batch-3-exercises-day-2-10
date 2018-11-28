
function applyOperator() {

  if(arguments.length <= 1)
  return 0;
  
  if(arguments.length === 2)
  return arguments[1];

  var result = 0;
  switch (arguments[0]){
    case '+':
      for(var i = 1; i<arguments.length;i++)
        result = result + arguments[i];
      break;

    case '-':
      result = arguments[1];
      for(i=2;i<arguments.length;i++)
        result = result - arguments[i];
      break;

    case '*':
      result = 1;
      for(i=1;i<arguments.length;i++)
        result = result * arguments[i];
      break;
    case '/':
    result = arguments[1];
    for(i=2;i<arguments.length;i++)
      result = result / arguments[i];
    break;
  }

  return result;
}

export {
  applyOperator,
};
