let boxes = document.querySelectorAll(".box");
let resentBtn = document.querySelector("#reset-btn");

let turnO = true; //playerX, PlayerO

let arr = ["apple","orange","litchi"];

//2D Array
let arr2 = [["apple","litchi"],["patato","mushroom"],["pants","shirts"]];

const winPatterns = [ 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 6],
    [6, 7, 8]

];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turnO){ 
            //playersO
            box.innerText = "O";
            turnO = false;
        } else {  
             //playersX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });

});

const checkWinner = () => {
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !=""&& pos2Val != ""&& pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
            }
        }
    }
};