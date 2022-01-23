// Задача 6. Дана строка:
// AAACCXXXXAAAAAABBBBB
// Необходимо переделать строку и привести к виду символ+количество повторения.
// Например высшеуказанную строку необходимо переделать 
// A3C2X4A6B5

const str = "AAAACCXXXXAABBBBB"
let j = 1
let result = 0
const changed = (str) => {
    for (i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {

            j = j + 1
        } else {
            l = str[i]
            result = result + j + l
            j = 1

        }
    }
    return result
}
console.log(changed(str))