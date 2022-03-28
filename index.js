

var randomnumber1 = Math.floor(Math.random()*6+1);
var image1 = "images/dice"+randomnumber1+".png";
document.querySelector(".img1").setAttribute("src",image1);


var randomnumber2 = Math.floor(Math.random()*6+1);
var image2 = "images/dice"+randomnumber2+".png";
document.querySelector(".img2").setAttribute("src",image2);

if(randomnumber1>randomnumber2){
  document.querySelector(".container h1").innerText = "Player 1 won";
}else if (randomnumber1<randomnumber2) {
  document.querySelector(".container h1").innerText = "Player 2 won";

}else document.querySelector(".container h1").innerText = "Its a tie";
