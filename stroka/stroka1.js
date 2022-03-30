const str1 = "[{}()]";

function checkStr(str) {
    const l = [];
    const opened = ['(', '{', '['];
    const closed = [')', '}', ']'];
    for (const char of str) { // loop trought all letters of expr
        if (opened.includes(char)) { // if its oppening bracket
            l.push(char);
        } else if (closed.includes(char)) { // if its closing
            const pair = opened[closed.indexOf(char)]; // find his pair

            if (l[l.length - 1] === pair) { // check if that pair is last element in array
                l.splice(-1, 1); //if so, remove it
            } else { // if its not
                l.push(char);
                break // exit loop
            }
        }
    }
    return (l.length === 0); // return true if length is 0, otherwise false
}
console.log(checkStr(str1))