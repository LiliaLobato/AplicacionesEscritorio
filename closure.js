
const sumar_3 = (a) => (b) => a + b;

console.log(sumar(5)(2))
console.log(sumar(5))
console.log(sumar_2(5)(2))
console.log(sumar_3(5)(2))

function sumar (a) {
    a = a || 0;
    return (b) => {
        return a + b;
    }
}

function sumar_2 (a) {
    return (b) => a + b;
}
