let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".rstbtn");
let msg=document.querySelector(".msg");
let msgContainer=document.querySelector(".msg-container");
let newgamebtn=document.querySelector("#newgamebtn")
let turn0=true;
 const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];
 const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
 }
 const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 };
 const disableBoxes=()=>{
    for(let box of boxes){
        boxes.disabled=true;
    }
 };
  const showWinner=(Winner)=>{
    msg.innerText=`Congratulations! The Winner is ${Winner}`;
    msgContainer.classList.remove("hide"); 
    disableBoxes();

 }
  const checkwinner=()=>{
    for(let pattern of winpatterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
               showWinner(val1);
            }
        }
    }
};
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame); 
 boxes.forEach((val)=>{
     val.addEventListener("click",()=>{
        if(turn0){
            val.innerText="O";
            turn0=false;
        }
        else{
            val.innerText="X";
            turn0=true;
        }
        val.disabled = true;
        checkwinner();
 });
});