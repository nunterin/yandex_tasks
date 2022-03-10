let str = "- - - -1- - \n|  A    F |\n|       B |\n|  J   P  |\n- - - -3- -"
console.log(str)
console.log(str.split('\n'))
let arr = str.split('\n')
let holesx = []
let holesy = []
let k = 0
let lit = /A|B|P|F|J/
let l = 0
let letterx = []
let lettery = []
for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
        if ((arr[i][j] == "1") | (arr[i][j] == "3")) {
            holesx[k] = j
            holesy[k] = i
            k = k + 1
        }
        if (lit.test(arr[i][j]) == true) {
            letterx.push(j)
            lettery.push(i)



        }
    }
}
console.log(holesx, holesy)


console.log(letterx, lettery)
let min = 10000
let dist = []
let max = 0
for (i = 0; i < letterx.length; i++) {
    for (j = 0; j < holesx.length; j++) {
        if (Math.sqrt(Math.pow((holesx[j] - letterx[i]), 2) + Math.pow((holesy[j] - lettery[i]), 2)) < min) {
            min = Math.sqrt(Math.pow((holesx[j] - letterx[i]), 2) + Math.pow((holesy[j] - lettery[i]), 2))

        }

    }

    if (min > max) {
        max = min
    }

}
console.log(max / 1)