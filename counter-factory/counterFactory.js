let increment = 0;
let decrement = 0;

function counterFactory() {
  return {
    increment: () => {
      increment += 1;
      return increment;
    },
    decrement: () => {
      decrement -= 1;
      return decrement;
    },
  };
}

export { counterFactory };
