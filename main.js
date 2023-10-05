// Print 1-10 Even numbers
const emptyArray = []
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        emptyArray.push(i)
    }
}
console.log(emptyArray);

function PrintOdd(initialValue, endingValue) {
    const emptyArray = []
    for (let i = initialValue; i < endingValue; i++) {
        if (i % 2 === 1) {
            emptyArray.push(i)
        }
    }
    return emptyArray;
}
console.log(PrintOdd(10, 100));