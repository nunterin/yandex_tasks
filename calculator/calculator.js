function calc(first, ...rest) {
    let oper = []
    oper.push(Number(first))
    for (i = 1; i < rest.length; i += 2) {
        oper.push(Number(rest[i]))
    }
    let zn = []
    let l
    for (i = 0; i < rest.length; i += 2) {
        zn.push(rest[i])
    }
    if (zn[0] === "+") {
        l = oper[0] + oper[1]
    } else if (zn[0] === "-") {
        l = oper[0] - oper[1]
    } else if (zn[0] === "/") {
        l = oper[0] / oper[1]
    } else if (zn[0] === "*") {
        l = oper[0] * oper[1]
    }

    for (i = 1; i < rest.length / 2 + 1; i++) {
        if (zn[i] === "+") {
            l = l + oper[i + 1]
        } else if (zn[i] === "-") {
            l = l - oper[i + 1]
        } else if (zn[i] === "/") {
            l = l / oper[i + 1]
        } else if (zn[i] === "*") {
            l = l * oper[i + 1]
        }
    }
    return l
}
console.log(String(calc('2', '+', '2', '*', '8', '/', '2', '-', '5')))