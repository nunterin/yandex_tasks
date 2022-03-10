str1 = "[{}()]"

function checkStr(str) {
    let l = []
    let opened = ['(', '{', '[']
    let closed = [')', '}', ']']
    for (let ch of str) { // loop trought all letters of expr
        if (opened.includes(ch)) { // if its oppening bracket
            l.push(ch)
        } else
        if (closed.includes(ch)) { // if its closing
            let pair = opened[closed.indexOf(ch)] // find his pair

            if (l[l.length - 1] === pair) { // check if that pair is last element in array
                l.splice(-1, 1) //if so, remove it
            } else { // if its not
                l.push(ch)
                break // exit loop
            }
        }
    }
    return (l.length === 0) // return true if length is 0, otherwise false
}
console.log(checkStr(str1))