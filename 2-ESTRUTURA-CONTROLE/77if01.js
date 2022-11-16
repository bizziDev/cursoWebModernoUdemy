function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log("Aprovado com " + nota   );
    }
}
soBoaNoticia(8.1)
soBoaNoticia(6)
//imprime no console apenas o resultado com boa notícia

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log("é verdade... " + valor);
    }
}
seForVerdadeEuFalo() //udefined = falso
seForVerdadeEuFalo(null) //resume pra falso
seForVerdadeEuFalo(undefined) //explicitamente 
seForVerdadeEuFalo(NaN) // resume pra falso
seForVerdadeEuFalo("")//string vazia = falso
seForVerdadeEuFalo(0) //unico numero falso
seForVerdadeEuFalo(-1) //e vdd
seForVerdadeEuFalo(" ") //string mesmo com espaço se torna verdadeira
seForVerdadeEuFalo("?") //com caractere especial = vdd
seForVerdadeEuFalo([])//arrey vazio = vdd
seForVerdadeEuFalo(["maria", "lima", "bizzi"])//arrey com elementos = vdd
seForVerdadeEuFalo({}) //objeto vazio = vdd
