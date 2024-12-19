let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let p1turn = true;
let count = 0;

let winningpatterns = 
[
    [0,1,2],[0,3,6],[0,4,8],       //Rows
    [1,4,7],[2,5,8],[2,4,6],       //Columns
    [3,4,5],[6,7,8]                //Diagonals

];

const showWinner = (Winner)=>{
    msg.innerText = `Congratulations, ${Winner}`;
    msgContainer.classList.remove("hide"); 


}
const checkDraw = ()=>{
    msg.innerText = `Oops!, Its a Draw`;
    msgContainer.classList.remove("hide"); 

}

// Function to check for a Winner
const checkWinner = ()=>{
    let hasWinner = false;
    for(let pattern of winningpatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText; 

        if(pos1 !== "" && pos2 !== "" &&pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3){
                hasWinner=true;
                showWinner(pos1);
                disableAllBoxes();
                break;
                
            }

        }    
    }
    if (!hasWinner && count === 9) {
        checkDraw();
    }

}
// Event listener for each box (button)
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(box.innerText === "" ){    
            if(p1turn){
                box.setAttribute("class","box");
            }else{
            box.setAttribute("class","boxp1");
            }                                           //to check if the box is empty
            box.innerText = p1turn ? "X" : "O" ;    // check if p1turn is true then x else o
            box.disabled = true;                    //disable box after a turn
            checkWinner();                          //function call
            p1turn=!p1turn;                         //change the turn
            count++
            console.log(count);
        }
        
        
    });
});
// Disable all boxes after a win
const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};
// Reset button functionality
resetbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    count = 0;
    p1turn = true; // Reset to player 1's turn
    console.log("Game reset!");
    msgContainer.classList.add("hide");
});
//new game button functionality
newbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    count = 0;
    p1turn = true; // Reset to player 1's turn
    console.log("New Game!");
    msgContainer.classList.add("hide");
});
