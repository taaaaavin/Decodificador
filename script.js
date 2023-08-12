const textoAlvo = document.querySelector("#textoAlvo");
const textoResultado = document.querySelector("#textoResultado");
function criptar(texto) {
    let matriz = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    texto = texto.toLowerCase();
    for(let i = 0; i < matriz.length; i++) {
        if(texto.includes(matriz[i][0])) {
            texto = texto.replaceAll(matriz[i][0], matriz [i][1]);
        }
    }
    return texto;
}
function btnCrip() {
    let textoCriptado = criptar(textoAlvo.value);
    textoResultado.value = textoCriptado;
    textoAlvo.value = "";
}
function descriptar(texto) {
    let matriz = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    texto = texto.toLowerCase();
    for(let i = 0; i < matriz.length; i++) {
        if(texto.includes(matriz[i][1])) {
            texto = texto.replaceAll(matriz[i][1], matriz [i][0]);
        }
    }
    return texto;
}
function btnDescrip() {
    let textoDescriptado = descriptar(textoAlvo.value);
    textoResultado.value = textoDescriptado;
    textoAlvo.value = "";
}
function copiarTexto() {
    const textoResultado = document.querySelector("#textoResultado");
    const btnCopiar = document.querySelector(".btnCopy");
    navigator.clipboard.writeText(textoResultado.value)
        .then(() => {
            btnCopiar.textContent = "Copiado!";
            setTimeout(() => {
                btnCopiar.textContent = "Copiar";
            }, 2000);
        })
        .catch(err => {
            console.error("Erro ao copiar o texto:", err);
        });
}