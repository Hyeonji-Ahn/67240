function leaveDisplay(){// if the mouse leave the div, then display the question
    document.getElementById("guessTheAnimalDiv").innerHTML ="<h2>This animal eats eucalyptus leaves</h2>";
    document.getElementById("guessTheAnimalDiv").style.backgroundColor = "#92A8D1";
}
function overDisplay(){//if the mouse is on the div, then display the image
    document.getElementById("guessTheAnimalDiv").innerHTML ="<img src=\"Koala.jpg\" alt=\"Koala\" width=\"250px\" height=\"250px\">";
    document.getElementById("guessTheAnimalDiv").style.backgroundColor = "#F7CAC9";
}

//set the initial div as question
leaveDisplay();
//if the mouse is over, then display the picture
document.getElementById("guessTheAnimalDiv").addEventListener("mouseover", overDisplay);

//if the mouse left, display he question again
document.getElementById("guessTheAnimalDiv").addEventListener("mouseleave", leaveDisplay);