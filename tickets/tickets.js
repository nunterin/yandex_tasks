/*
Билеты по маршруту
У нас есть набор билетов вида:
[
    { from: 'London', to: 'Moscow' },
    { from: 'NY', to: 'London' },
    { from: 'Moscow', to: 'SPb' },
    ...
]
Из этих билетов можно построить единственный, неразрывный маршрут.
Петель и повторов в маршруте нет.
Нужно написать программу, которая возвращает билеты 
в порядке следования по маршруту.
*/
const test = [
    { from: 'London', to: 'Moscow' },
    { from: 'NY', to: 'London' },
    { from: 'Moscow', to: 'SPb' },
    { from: 'SPb', to: 'Berlin' }


]

function getRoute(object) {
    let obj = [];
    let cities = [];
    for (i = 0; i < object.length; i++) {
        j = 0
        k = 0
        while (j < object.length) {
            if (object[i].from != object[j].to) {
                k += 1
            }
            j += 1
        }
        if (k == object.length) {
            obj[0] = object[i]
        }
    }
    j = 0
    while (j < object.length) {
        for (i = 0; i < object.length; i++) {
            if (obj[j].to == object[i].from) {
                obj[j + 1] = object[i]

            }
        }
        j += 1
    }

    return obj
}



console.log(getRoute(test))