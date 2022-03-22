arraynumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function funzione(array, n1, n2) {
    const arrayfinale = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        if (i > n1 && i < n2) {
            arrayfinale.push(element);
        }
    }
    return arrayfinale;
}

const array = funzione(arraynumeri, 2, (arraynumeri.length - 1));
console.log(array);