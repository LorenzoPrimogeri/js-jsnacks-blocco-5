const arrayOggetti = [
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 20,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 21,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 22,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 23,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 24,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 25,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 26,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 27,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 28,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 29,
    },
    {
        "tipo": "gialla",
        "peso": 20,
        "lunghezza": 30,
    },
]
let somma = 0;
for (let i = 0; i < arrayOggetti.length; i++) {
    let element = arrayOggetti[i].peso;
    somma += element;
}
console.log("La somma è:" + somma);
