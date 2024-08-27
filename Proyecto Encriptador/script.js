function encriptar() {
    let texto = document.getElementById("entrada").value;
    
    if (texto === "") {
        alert("Ningún texto fue ingresado.");
        return;
    }


    if (!/^[a-z\s]+$/.test(texto)) {
        alert("Solo se permiten letras minusculas y espacios.");
        return;
    }

    let encriptarTexto = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("salida").value = encriptarTexto;
}

function desencriptar() {
    let texto = document.getElementById("entrada").value;

    let desencriptarTexto = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("salida").value = desencriptarTexto;
}

function copiar() {
    let salida = document.getElementById("salida");
    
    if (salida.value.trim() === "") {
        alert("No hay texto para copiar.");
        return;
    }
    
    salida.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles.");
}
