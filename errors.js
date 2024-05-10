const sum = (a, b) => {
  return a + b;
};

console.log(sum(5, 8));

const sum2 = (a, b) => {
  if (a && b) {
    return a + b;
  }

  throw new Error('You mised some arguments"');
};

try {
  console.log(sum2(5));
} catch (error) {
  console.log('Some error occured');
}
