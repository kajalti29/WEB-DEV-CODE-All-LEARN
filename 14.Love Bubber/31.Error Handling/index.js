//Handling:- code ko crash  hone rokna 

/*
try {
  // yahan wo code likhte hain jo error de sakta hai
} catch (error) {
  // agar upar wale code me error aata hai, to ye chalega
}
*/

try {
    console.log("try block starts here");
    console.log(x); //reference error
    console.log("try blokc ends here")
    //a

    //b

    //c

}
 catch (err) {

    //define karte h, error k sath app kya krna  chahte hai
    //retry logic
    //fallback mechanism
    //logging
    //custom error


    console.log("I AM INSIDE CATCH BLOCK")
    console.log("Your error is here:", err);
}

