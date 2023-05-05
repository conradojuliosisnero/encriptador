// encriptador de texto challengue oracle ONE

var botonencriptar = document.querySelector(".btn_encriptar");
var botondesencriptar = document.querySelector(".btn_desencriptar");
var botonCopiar = document.querySelector(".btn_copiar");
var textarea = document.querySelector(".texarea");
var resultado = document.querySelector(".box_resultado");

botonencriptar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;

function encriptar(){
    ocultaradelante();
    var texarea = recuperartexto()
    resultado.textContent = encriptartexto(textarea)
}

function desencriptar(){
    ocultaradelante();
    var texarea = recuperartexto()
    resultado.textContent = desencriptartexto(textarea)
}

function recuperartexto(){
    var texarea =document.querySelector(".texarea")
    return texarea.value
}

function ocultaradelante() {
    botonCopiar.classList.add("ocultar")
    sectio_2.classList.add("ocultar")
}
// funcion de encriptar
function encriptartexto(){
    var texto = mensaje;
    var textofinal = ""; 

    for(var i = 0; i < texto.length; i++){
        if (texto[i] == "a") {
            textofinal =textofinal + "ai"
        } else if(texto[i] == "e"){
            textofinal = textofinal +"enter"
        }else if(texto[i] == "i"){
            textofinal = textofinal +"items"
        }else if(texto[i] == "o"){
            textofinal = textofinal +"ober"
        }else if(texto[i] == "u"){
            textofinal = textofinal +"ufat"   
        }
    }
    return textofinal;
}
// funcion de desencriptar
function desencriptartexto(mensaje){
        var texto = mensaje;
        var textofinal = ""; 
    
    for(var i = 0; i < texto.length; i++){
            if (texto[i] == "a") {
                textofinal =textofinal + "a"
                i = i+1;
            } else if(texto[i] == "e"){
                textofinal = textofinal +"e"
                i = i+4;
            }else if(texto[i] == "i"){
                textofinal = textofinal +"i"
                i = i+3;
            }else if(texto[i] == "o"){
                textofinal = textofinal +"o"
                i = i+3;
            }else if(texto[i] == "u"){
                textofinal = textofinal +"u"
                i = i+3;   
            }else{
                textofinal =  textofinal + texto[i];

            }
        }
        return textofinal;
}
// funcion de copiar
const copiar = document.querySelector(".btn_copiar")
    copiar.addEventlistener("click", copiar = () =>{
    var contenido = document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola")
})
