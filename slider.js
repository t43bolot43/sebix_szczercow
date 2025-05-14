var div = document.getElementById('main');
var lewo = document.getElementById('lewo');
var prawo = document.getElementById('prawo');
var i = 1;

lewo.addEventListener(click, odejmij);
prawo.addEventListener(click, dodaj);

function odejmij(){
    i = i - 1;
}
function dodaj(){
    i = i + 1;
}

while(True){
    div.innerHTML = "<img src="+ i + "'.jpeg'/>";
}
