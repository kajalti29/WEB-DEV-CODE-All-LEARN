/*
function sum (a,b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(1, 2, sum);
*/

function getData(dataId, getNextData) {
    // Simulate data fetching with 2 second delay
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();  // CALL करना ज़रूरी है
        }
    }, 2000);
}

// Callback Hell (nested callbacks)
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});
