//. Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante.

const checar = function (letra) {

    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        console.log("Vogal");
    } else {
        console.log("consoante");
    }
}


checar("n")
checar("a")