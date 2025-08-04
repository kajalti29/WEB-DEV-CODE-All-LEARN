/*
let promise = new Promise((resolve, reject) => {
  resolve("Data received");
});

promise.then((result) => {
  console.log("Success:", result);
});
*/




let promise = new Promise((resolve, reject) => {
    reject("Something went wrong...");
});

promise
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
