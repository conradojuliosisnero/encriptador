var botonencriptar = document.querySelector(".btn_encriptar");
var botondesencriptar = document.querySelector(".btn_desencriptar");
var botonCopiar = document.querySelector(".btn_copiar");
var textarea = document.querySelector(".texarea");
var textareaResultado = document.querySelector(".resultado");
var sectio_2 = document.querySelector(".sectio_2");
var box_img = document.querySelector(".box_img img");
var box_mensaje_h3 = document.querySelector(".box_mensaje h3");
var box_mensaje_text = document.querySelector(".box_mensaje_text");

botonencriptar.addEventListener('click', encriptar);
botondesencriptar.addEventListener('click', desencriptar);
botonCopiar.addEventListener('click', copiar);

function encriptar() {
    var texarea = recuperartexto();
    if (validarTexto(texarea)) {
        var textofinal = encriptartexto(texarea);
        box_mensaje_h3.textContent = 'Mensaje Encriptado: ';
        box_mensaje_text.textContent = textofinal;
        mostrarresultado();
    }
}

function desencriptar() {
    var texarea = recuperartexto();
    if (validarTextoDesencriptar(texarea)) {
        var texto = desencriptartexto(texarea);
        box_mensaje_h3.textContent = 'Mensaje Desencriptado: ';
        box_mensaje_text.textContent = texto;
        mostrarresultado();
    }
}

function recuperartexto() {
    return textarea.value;
}

function mostrarresultado() {
    botonCopiar.classList.remove("ocultar");
    sectio_2.classList.remove("ocultar");
    box_img.classList.add("ocultar");
    box_mensaje_text.classList.add("ocultartex");
}

function encriptartexto(mensaje) {
    var textofinal = mensaje.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5');
    return textofinal;
}

function desencriptartexto(mensaje) {
    var texto = mensaje.replace(/5/g, 'u').replace(/4/g, 'o').replace(/3/g, 'i').replace(/2/g, 'e').replace(/1/g, 'a');
    return texto;
}

function copiar() {
    navigator.clipboard.writeText(box_mensaje_text.textContent);
}

function validarTexto(texto) { // Para el encriptado
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function validarTextoDesencriptar(texto) { // Para la desencriptación
    const regex = /^[a-z\s0-9]*$/; // Ahora permite números
    return regex.test(texto);
}
