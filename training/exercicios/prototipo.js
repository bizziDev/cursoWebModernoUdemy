//criando objetos e fazendo uma cadeia de prototypes

//trabalha com uma emulação de erança utilizando classe, como no javaScript não há de forma nativa de classe, se utiliza uma "sintax sugar" o protype 

const animal = {
    som: 'um som de animal',
    tipo: "animal",
    emitirSom: function() {
        console.log(this.som);
    }
    }
   animal.emitirSom()