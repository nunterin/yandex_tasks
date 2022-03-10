const data = [{
        geometry: [10, 20],
        text: "Jame"
    },
    {
        geometry: [20, 40],
        text: "Bond"
    },
    {
        geometry: [5, 40],
        text: "Bond"
    }
];
const dictionary = ["James", "Bond"];


function res(list) {
    sortByCoordinates(list);
    let name = []
    for (i = 0; i < list.length; i++) {
        name[i] = list[i].text
    }

    function sortByCoordinates(arr) {
        for (var i = 0, endI = arr.length - 1; i < endI; i++) {
            for (var j = 0, endJ = endI - i; j < endJ; j++) {
                if (arr[j].geometry[0] > arr[j + 1].geometry[0]) {
                    var swap = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = swap;
                }
            }
        }
        return arr;
    }
    return name;
}

console.log(res(data))