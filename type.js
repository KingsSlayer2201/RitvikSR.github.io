var i = 0;
var txt = "Happy Women's day Maa ! You are the strongest , wisest and lovliest woman I have met . My first friend . Love You :) ";
var speed = 100;

window.addEventListener('click', typeWriter);

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
