/*let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve(123);
    reject("some error");
});
*/

function getData(dataId, getNextData) { //API Datak
    return new Preomise((resolve, reject) => {
        setTimeout(() =>{
            console.log("data", dataId);
            resolve("success");
            if(getNextData) {
                getNextData();
            }
        }, 5000);
    });
}

