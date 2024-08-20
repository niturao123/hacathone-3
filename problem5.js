function makePlusFunction(n) {
    return (num)=> (num + n)
}
const abc = makePlusFunction(5);
const plusNine = makePlusFunction(9);
console.log(abc(7));
console.log(plusNine(10));
