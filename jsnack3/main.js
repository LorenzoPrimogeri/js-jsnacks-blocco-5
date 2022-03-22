const stringa = prompt("inserisci la stringa da stampare al contrario");
const array = [];
contrario();
function contrario() {
    j = stringa.length;
    for (let i = 0; i < stringa.length + 1; i++) {
        const element = stringa[j];
        array.push(element);
        j--;
    };
    console.log(array.join(""));
}