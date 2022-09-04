var input = document.querySelector("#input-text");
var botonEncriptador = document.querySelector("#boton-encriptar");
var botonDesencriptar = document.querySelector("#boton-desencriptar");
var mensaje = document.querySelector("#mensaje");
var botonCopiar = document.querySelector("#boton-copiar");

document.getElementById("aparece").style.display = 'none';
inputverificar();

document.getElementById('boton-encriptar').onclick = (e) => {
  e.preventDefault();
  var mensajeEncriptado = encriptar(input.value.toLowerCase());
  mensaje.value = mensajeEncriptado;
  input.value = "";
  aparece()
}

document.getElementById('boton-desencriptar').onclick = (e) => {
  e.preventDefault();
  var mensajeDesencriptado = desencriptar(input.value);
  mensaje.value = mensajeDesencriptado;
  input.value = "";
  aparece()
}

document.getElementById('boton-copiar').onclick = (e) => {
  e.preventDefault();
  var mensaje = document.querySelector("#mensaje");
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value = "";
}

function encriptar(mensajeEncriptado) {
  var matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  var i;
  mensajeEncriptado = mensajeEncriptado.toLowerCase()
  for (i=0; i < matriz.length; i++) {
    if (mensajeEncriptado.includes(matriz[i][0])) {
      mensajeEncriptado  = mensajeEncriptado.replaceAll(matriz[i][0], matriz[i][1])
    }
  }
  return mensajeEncriptado;
}


function desencriptar(mensajeEncriptado) {
  var matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  var i;
  mensajeEncriptado = mensajeEncriptado.toLowerCase();
  for (i = 0; i < matriz.length; i++) {
    if (mensajeEncriptado.includes(matriz[i][1])) {
      mensajeEncriptado = mensajeEncriptado.replaceAll(matriz[i][1], matriz[i][0])
    }
  }
  return mensajeEncriptado;
}

function aparece() {
  document.getElementById("desaparece").style.display = 'none';
  document.getElementById("aparece").style.display = 'block';
}

function home() {
  document.getElementById("aparece").style.display = 'none';
  document.getElementById("desaparece").style.display = 'block';
}

function inputverificar() {
  var inputPalabra = document.querySelector("#input-text");
  inputPalabra.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 65) {
      e.preventDefault();
    }
  });
}


