//Необходимо реализовать функцию которая будет выявлять 
// являются ли две строки анаграммами. 
// Две строки являются анаграммами 
// если один получается от другого с помощю перестоновки букв.
// Например "рот" и "тор".
let str = "pol"
let str1 = "lok"


const anagram = (str, str1) => {
    str2 = str.split("").sort().join("")
    str3 = str1.split("").sort().join("")

    if (str.length != str1.length) { return false }
    for (i = 0; i < str.length; i++) {
        if (str2[i] == str3[i]) {
            return true
        } else { return false }
    }
}
console.log(anagram(str, str1))