function palindrome(str) {
    let str1 = ""
    let clearString = str => (str.match(/[a-z\s]+/gui)).join('');
    str = clearString(str)

    str = str.toLowerCase()
    let arr = [];
    let k = str.length - 1
    for (let i = 0; i < str.length; i++) {

        arr[i] = str[k - i]
    }
    str1 = arr.join("")

    if (str == str1) {
        return true
    } else { return false }
}


palindrome("eye");


/*if (str == str1.join()) {
    ret str1
} else { return str }*/