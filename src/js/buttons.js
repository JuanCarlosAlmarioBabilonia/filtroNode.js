const encriptarButton = document.getElementById("encriptarButton")
const desencriptarButton = document.getElementById("desencriptarButton")
const resultText = document.querySelector(".textos")
const textoSalida = document.querySelector(".textoResultante")


if(encriptarButton) {
    encriptarButton.addEventListener("click", () =>{
        let texto_encriptado = "Texto encriptado con exito"
        let texto = document.querySelector(".input").value

        let textocifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

        if(texto.length != 0){
            textoSalida.innerHTML = 
            `<div class="textoResultante">
                <p>${textocifrado}</p>
            </div>`;
            resultText.innerHTML = 
            `<div class="textos">
                <h1>${texto_encriptado}</h1>
            </div>`;
        } else {

        }
    })
}

if(desencriptarButton) {
    desencriptarButton.addEventListener("click", () =>{
        let texto_desencriptado = "Texto desencriptado con exito"
        let texto = document.querySelector(".input").value

        let textocifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        if(texto.length != 0){
            textoSalida.innerHTML = 
            `<div class="textoResultante">
                <p>${textocifrado}</p>
            </div>`;
            resultText.innerHTML = 
            `<div class="textos">
                <h1>${texto_desencriptado}</h1>
            </div>`;
        } else {

        }
    })
}