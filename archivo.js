function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();

    var newTexto= texto.replace(/e/igm,"enter");
    var newTexto= newTexto.replace(/o/igm,"ober");
    var newTexto= newTexto.replace(/i/igm,"imes");
    var newTexto= newTexto.replace(/a/igm,"ai");
    var newTexto= newTexto.replace(/u/igm,"ufat");

    document.getElementById("muñeco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = newTexto;
    document.getElementById("copiar").style.display= "show";
    document.getElementById("copiar").style.display= "inherit";   
}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();

    var newTexto= texto.replace(/enter/igm,"e");
    var newTexto= newTexto.replace(/ober/igm,"o");
    var newTexto= newTexto.replace(/imes/igm,"i");
    var newTexto= newTexto.replace(/ai/igm,"a");
    var newTexto= newTexto.replace(/ufat/igm,"u");

    document.getElementById("muñeco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = newTexto;
    document.getElementById("copiar").style.display= "show";
    document.getElementById("copiar").style.display= "inherit";   
}

function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand ("copy");
    alert("el mensaje fue copiado exitosamente!");
}