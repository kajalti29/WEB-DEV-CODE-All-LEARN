//While Loop
/*
let i= 1;
while(i<=10) {
    console.log("Kajalti");
    i++;
}
*/


/*
//While Loop Reverse
let i = 10;
while(i>=1) {
    console.log(i);
    i--;
}
 */   


//While Loop continues
/*
let i = 0;
while(i<5){
    i++
    if(i == 3){
     continue; //Continue ka use current iteration ko skip karne ke liye kiya jata hai.
    }
    console.log(i);
}
    */


//✅ 1. Break in while loop
let i = 1;

while(i <= 10) {
    if(i == 5) {
        break; // Loop यहीं पर रुक जाएगा
    }
    console.log(i);
    i++;
}



