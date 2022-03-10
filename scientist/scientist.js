let list = [
    ["explorer1", "toponym1", "toponym2"],
    ["explorer2", "toponym2", "toponym3"],
    ["explorer3", "toponym4", "toponym1"]

]


function ch(li) {
    let place = []
    let list = []
    for (i = 0; i < li.length - 1; i++) {
        place[i] = li[i + 1]
    }
    place.push(li[0])


    return place
}
console.log(ch(list[1]))

let res = ["tu", "jo"]
j = 0
while (j < list.length) {
    res[j] = ((ch(list[j])))
    j++

}
console.log(res)