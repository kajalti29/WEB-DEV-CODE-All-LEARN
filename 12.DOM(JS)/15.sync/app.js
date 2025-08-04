// Synchronous: Ye sequence of instructions hai
console.log("one");
console.log("two");
console.log("three");

// Asynchronous: Ye delay ke sath background me chalega
setTimeout(() => {
    console.log("hello");
}, 4000); // 4000 milliseconds = 4 seconds


console.log("Four");
console.log("Five");