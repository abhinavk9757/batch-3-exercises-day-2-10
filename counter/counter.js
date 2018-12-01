function counter() {
  let a = 0;
  return () => {
    a += 1;
    return a;
  };
}

export { counter };
