// accedemos a las cinco escenas
var portada = document.getElementById("portada");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var contraPortada = document.getElementById("contraPortada");

// audio
// sonido
efecto = new Audio("media/camera-flash.mp3");

// hacemos que desaparezcan todos menos p1
portada.style.display = "block";
p1.style.display = "none";
p2.style.display = "none";
p3.style.display = "none";
p4.style.display = "none";
p5.style.display = "none";
contraPortada.style.display = "none"; 

//hacemos que la promera diapositiva tenga un efecto
portada.style.animation = "opacity-normal 5s";
portada.firstElementChild.style.animation = "bottom-normal 5s  ";

//lanzamos eventos y animaciones sobre cuenca
portada.addEventListener("click", function () {
  efecto.play();
  portada.style.display = "none";
  p1.style.display = "block";
  p1.style.animation = "opacity-normal 5s";
  p1.firstElementChild.style.animation = "opacity-normal 5s  ";
});
//lanzamos eventos sobre p1
p1.addEventListener("click", function () {
  efecto.play();
  p1.style.display = "none";
  p2.style.display = "block";
  p2.style.animation = "opacity-normal 5s";
  p2.firstElementChild.style.animation = "opacity-normal 5s ";
});
//lanzamos eventos sobre p2
p2.addEventListener("click", function () {
  efecto.play();
  p2.style.display = "none";
  p3.style.display = "block";
  p3.style.animation = "opacity-normal 5s";
  p3.firstElementChild.style.animation = "opacity-normal 5s  ";
});
//lanzamos eventos sobre p3
p3.addEventListener("click", function () {
  efecto.play();
  p3.style.display = "none";
  p4.style.display = "block";
  p4.style.animation = "opacity-normal 5s";
  p4.firstElementChild.style.animation = "opacity-normal 5s  ";
});
//lanzamos eventos sobre p4
p4.addEventListener("click", function () {
  efecto.play();
  p4.style.display = "none";
  p5.style.display = "block";
  p5.style.animation = "opacity-normal 5s";
  p5.firstElementChild.style.animation = "opacity-normal 5s  ";
});
p5.addEventListener("click", function () {
  efecto.play();
  p5.style.display = "none";
  contraPortada.style.display = "block";
  contraPortada.style.animation = "opacity-normal 5s";
  contraPortada.firstElementChild.style.animation = "opacity-normal 5s  ";
});
p5.addEventListener("onClick", function () {
  efecto.play();
  contraPortada.style.display = "none";
  portada.style.display = "block";
  portada.style.animation = "opacity-normal 3s";
  portada.firstElementChild.style.animation = "opacity-normal 3s  ";
});

// reproductor de musicaç
var audio = document.querySelector("audio");
var icono = document.querySelector("#audio i");
icono.addEventListener("click", reproducirMusica);

function reproducirMusica(){
  if(audio.paused){
    audio.play();
    icono.className = "bi bi-pause-circle-fill";
    icono.setAttribute("title", "Parar música")
  }else {
    icono.className = "bi bi-music-note-beamed";
    icono.setAttribute("title", "Reproducir música")

    audio.pause();
  }
  
}
