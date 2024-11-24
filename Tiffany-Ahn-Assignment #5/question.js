var question = "Are koalas endangered?";
var answer ="Yes. Although they are officially classified as “vulnerable” and on the “threatened species list”, koala population numbers are crashing. ";
var state = 1; //if state is 0, it is question. if state is 1, it displays answer

function changeDisplay(){
    if(state){
        // if the state is 1, then display the queston
        document.getElementById("clickable").innerHTML =question;
        document.getElementById("questionDiv").style.backgroundColor = "#92A8D1";
        //for next time, change the state back to 0.
        state=0;
    }else{
        // if the state is 0, then display the answer
        document.getElementById("clickable").innerHTML =answer;
        document.getElementById("questionDiv").style.backgroundColor = "#F7CAC9";
        // for next time, change the state to 1.
        state=1;
    }
}

//initial setting of the display to question
changeDisplay();
//if the click is detected, change display.
document.getElementById("questionDiv").addEventListener("click",changeDisplay)