var div = document.getElementById('main');
var lewo = document.getElementById('lewo');
var prawo = document.getElementById('prawo');
var i = 1;
console.log(prawo);
console.log(lewo)

lewo.addEventListener("click", odejmij);
prawo.addEventListener("click", dodaj);

function odejmij(){
    i = i - 1;
    div.innerHTML = "<img src="+ i + "'.jpeg'/>";
}
function dodaj(){
    i = i + 1;
    div.innerHTML = "<img src='" + i + ".jpeg'/>";
}
