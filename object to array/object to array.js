// С бекенда приходит массив такого вида:
var arr = [
    { name: 'width', value: 10 },
    { name: 'height', value: 20 },
    // ...
];

// Нужно получить объект такого вида:
/*
{
  width: 10,
  height: 20,
  ...
}
*/

function arrToobj(arr) {
    let obj = {}
    for (i = 0; i < arr.length; i++) {
        obj[arr[i].name] = arr[i].value

    }
    return obj

}
console.log(arrToobj(arr))