var botonencriptar = document.querySelector(".btn_encriptar");
var botondesencriptar = document.querySelector(".btn_desencriptar");
var botonCopiar = document.querySelector(".btn_copiar");
var textarea = document.querySelector(".texarea");
var textareaResultado = document.querySelector(".resultado");
var sectio_2 = document.querySelector(".sectio_2");
var box_img = document.querySelector(".box_img img");
var box_mensaje_h3 = document.querySelector(".box_mensaje h3");  // Selecciona el elemento h3
var box_mensaje_text = document.querySelector(".box_mensaje_text");  // Selecciona el elemento p

botonencriptar.addEventListener('click', encriptar);
botondesencriptar.addEventListener('click', desencriptar);
botonCopiar.addEventListener('click', copiar);

function encriptar(){
    var texarea = recuperartexto()
    if (validarTexto(texarea)) {  
        var textofinal = encriptartexto(texarea);
        box_mensaje_h3.textContent = textofinal;  // Reemplaza el contenido del h3
        box_mensaje_text.textContent = "";  // Elimina el contenido del p
        mostrarresultado();
    }
}

function desencriptar(){
    var texarea = recuperartexto()
    if (validarTexto(texarea)) {  
        var texto = desencriptartexto(texarea);
        box_mensaje_h3.textContent = texto;  // Reemplaza el contenido del h3
        box_mensaje_text.textContent = "";  // Elimina el contenido del p
        mostrarresultado();
    }
}


function recuperartexto(){
    return textarea.value
}

function mostrarresultado() {
    botonCopiar.classList.remove("ocultar");
    sectio_2.classList.remove("ocultar");
    box_img.classList.add("ocultar");  // Ocultar la imagen
}

function encriptartexto(mensaje){
    var textofinal = mensaje.replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/i/g, 'items').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    return textofinal;
}

function desencriptartexto(mensaje){
    var texto = mensaje.replace(/ufat/g, 'u').replace(/ober/g, 'o').replace(/items/g, 'i').replace(/enter/g, 'e').replace(/ai/g, 'a');
    return texto;
}

function copiar(){
    navigator.clipboard.writeText(textareaResultado.textContent);
}

function validarTexto(texto) {  // Función para validar el texto
    const regex = /^[a-z\s]*$/;  // Permite espacios junto con letras minúsculas
    return regex.test(texto);
}
