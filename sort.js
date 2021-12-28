const numbersArr = [45, 12, 36, 98, 123, 2, 54, 78, 63, 14];
const sortOdd = (arr) => {
    let oddIndexes = [],
        sorted = new Array(arr.length);
    for (let i = 1; i < arr.length; i += 2) {
        oddIndexes.push(arr[i]);
    }
    oddIndexes.sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
        sorted[i] = (i % 2 === 0 ? arr[i] : oddIndexes[Math.floor(i / 2)]);
    }
    return sorted;
}
console.log(sortOdd(numbersArr));