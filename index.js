var randomNumber1 = Math.floor(1+(Math.random()* 6));

document.querySelector("img.img1").setAttribute("src", "images/dice"+randomNumber1+".png");


var randomNumber2 = Math.floor(1+(Math.random()* 6));

document.querySelector("img.img2").setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins"
}
else if(randomNumber1==randomNumber2){document.querySelector("h1").innerHTML = "It's draw"}

else{ document.querySelector("h1").innerHTML = "Player 2 wins🚩"}