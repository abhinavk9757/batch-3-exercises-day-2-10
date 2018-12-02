function binaryAgent(args) {
  const individualBinary = args.split(' ');
  let mappedBinary = individualBinary.map((element) => {
    const val = String.fromCharCode(parseInt(element, 2));
    return val;
  });

  mappedBinary = mappedBinary.reduce((acc, value) => (acc + value));

  return mappedBinary;
}

export { binaryAgent };
