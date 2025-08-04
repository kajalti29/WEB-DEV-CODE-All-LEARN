//async Keyword/
async function hello() {
    console.log("hello");
}

//Await Keyword//
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

async function showData() {
  console.log("Fetching data...");
  const result = await getData(); // waits for 2 seconds
  console.log(result);
}

showData();



/*Async-await
async function getAllData() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
    console.log("getting data5....");
    await getData(5);
    await getData(6);
}
*/