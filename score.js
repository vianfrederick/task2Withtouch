var results = localStorage.getItem("SCORE");

document.querySelector(".show").innerHTML = results;

var theme = new Audio("ThemeMusic.mp3");
theme.play();
var colourArray = localStorage.getItem("colourScore") ?
JSON.parse(localStorage.getItem("colourScore")) : []

localStorage.setItem("colourScore", JSON.stringify(colourArray));
if(localStorage.getItem("SCORE")){
colourArray.push(localStorage.getItem("SCORE"));

localStorage.setItem("colourScore", JSON.stringify(colourArray));


var something = colourArray;

for (var m =0;m<something.length;m++){
  something[m] = parseFloat(something[m]);
}

  something.sort(function(a, b){return b - a});




  localStorage.setItem("FIRST",something[0]);
  document.querySelector(".highFinal").innerHTML = localStorage.getItem("FIRST");

}


function again(){
  var plzz2 = new Audio("music.mp3");
  plzz2.play();
  setTimeout(function(){
  window.location.replace("play.html");},2000);
}
