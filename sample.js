var x1 =Math.floor(Math.random()*6)+1;

var diceImage1= "images/dice" + x1 + ".png";

var y1 = document.querySelectorAll("img")[0];
y1.setAttribute("src", diceImage1);


var x2 = Math.floor(Math.random()*6)+1;

var diceImage2 = "images/dice" + x2 + ".png";

var y2 = document.querySelectorAll("img")[1];
y2.setAttribute("src", diceImage2);

if(x1>x2){
    document.querySelector("h1").innerHTML="Player1 Wins!";
}

else if(x1<x2){
    document.querySelector("h1").innerHTML="Player2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}