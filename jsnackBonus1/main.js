const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = ["a", "b", "c", "d", "e", "f", "g"];

function unisciArray() {
    const unione = [];
    for (let i = 0; i < array1.length; i++) {
        const element1 = array1[i];
        const element2 = array2[i];
        unione.push(element1);
        unione.push(element2);
    } return unione;
}
const unione = unisciArray();
console.log(unione);