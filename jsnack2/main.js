const arrayOggetti = [
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 10,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 11,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 12,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 13,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 214,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 125,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 16,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 17,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 18,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 19,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 20,
    },
]
const arraySup = [];
const arrayInf = [];

for (let i = 0; i < arrayOggetti.length; i++) {
    let element = arrayOggetti[i];
    if (element.lunghezza > 15) {
        arraySup.push(element);
    } else {
        arrayInf.push(element);
    }
}
console.log("la somma del array con i valori minori di 15 è:")
sommArray(arrayInf);
console.log("la somma del array con i valori maggiori di 15 è:")
sommArray(arraySup);

function sommArray(array) {
    let somma = 0;
    for (let i = 0; i < array.length; i++) {
        somma += array[i].peso;

    }
    console.log(somma);
}
