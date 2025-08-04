let promise = new Promise((resolve, reject) => {
    resolve(1);
});

promise
  .then((value) => {
    console.log("Step 1:", value); // 1
    return value + 1;
  })
  .then((value) => {
    console.log("Step 2:", value); // 2
    return value + 1;
  })
  .then((value) => {
    console.log("Step 3:", value); // 3
  });
