function overDisplay_1(){
    document.getElementById("everChanging").style.opacity = "100";
}
function leaveDisplay_1(){
    document.getElementById("everChanging").style.opacity = "0";
}

function overDisplay_2(){
    document.getElementById("founded").style.opacity = "100";
}
function leaveDisplay_2(){
    document.getElementById("founded").style.opacity = "0";
}

function overDisplay_3(){
    document.getElementById("proudHistory").style.opacity = "100";
}
function leaveDisplay_3(){
    document.getElementById("proudHistory").style.opacity = "0";
}

function overDisplay_4(){
    document.getElementById("library").style.opacity = "100";
}
function leaveDisplay_4(){
    document.getElementById("library").style.opacity = "0";
}

leaveDisplay_1();
leaveDisplay_2();
leaveDisplay_3();
leaveDisplay_4();

document.getElementById("everChanging").addEventListener("mouseover", overDisplay_1);
document.getElementById("everChanging").addEventListener("mouseleave", leaveDisplay_1);

document.getElementById("founded").addEventListener("mouseover", overDisplay_2);
document.getElementById("founded").addEventListener("mouseleave", leaveDisplay_2);

document.getElementById("proudHistory").addEventListener("mouseover", overDisplay_3);
document.getElementById("proudHistory").addEventListener("mouseleave", leaveDisplay_3);

document.getElementById("library").addEventListener("mouseover", overDisplay_4);
document.getElementById("library").addEventListener("mouseleave", leaveDisplay_4);