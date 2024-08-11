let boxes= document.querySelectorAll(".box")
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGamebtn= document.querySelector("#new-btn")
let resetGamebtn=document.querySelector("#reset-btn")
let turn0=true;
let count=0;
const winningPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const draw=()=>{
    msg.innerText= "OOPS, the Match is Draw";
    msgContainer.classList.remove("hide");
    disableboxes();
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        if(turn0)
        {
            box.innerText="O"
            turn0=false;
        }
        else
        {
            box.innerText="X"
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })
});
const disableboxes=()=>{
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes=()=>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText=""
    }
}
const showWinner=(winner)=>{
    msg.innerText= `Congratulations, the Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}
const checkWinner=()=>{
    for(let pattern of winningPatterns)
    {
        let pos1value=boxes[pattern[0]].innerText;
        let pos2value=boxes[pattern[1]].innerText;
        let pos3value=boxes[pattern[2]].innerText;
        if(pos1value!="" && pos2value!="" && pos3value!="")
        {
            if(pos1value == pos2value && pos2value == pos3value)
            {
                showWinner(pos1value);
                break;
            }
            else if(count===9)
            {
                draw();
            }
        }
    }
}
const resetGame=()=>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide")
    count=0;
}
newGamebtn.addEventListener("click",resetGame);
resetGamebtn.addEventListener("click",resetGame);