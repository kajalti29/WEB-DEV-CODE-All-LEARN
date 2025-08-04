/*Use if-else if-else to categorize a person based on age:

Age < 13: Child

13-19: Teen

20-60: Adult

60: Senior
*/
let age = 60;
if(age < 13){
    console.log("child");
} else if(age >=13 && age<=19){
    console.log("Teen");
}else if(age> 13 && age<60){
    console.log("Adult");
}else if(age == 60){
    console.log("senior");
}else{
    console.log(Elderly);
}