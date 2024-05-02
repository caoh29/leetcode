const addTwoPromises = async function(promise1, promise2) {
  const [value1, value2] = await Promise.all([promise1, promise2]);

  return value1 + value2;
};

const value = addTwoPromises(
  new Promise((resolve) => {
    resolve(1);
  }),
  new Promise((resolve) => {
    resolve(2);
  })
);
async function main() {
  console.log(await value);
}

main();