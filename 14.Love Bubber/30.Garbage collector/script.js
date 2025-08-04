//Garbage collector
/*Garbage Collector (GC) एक automatic memory management system है जो JavaScript engine (जैसे V8) में होता है।

जब कोई variable या object memory में होता है और वो अब "कहीं से भी accessible नहीं है",
तो Garbage Collector उसे हटा देता है, ताकि memory free हो जाए।
*/
let user = {
  name: "Kajal"
};

user = null;  // अब "Kajal" वाला object unreachable हो गया
