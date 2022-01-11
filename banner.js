//“Задача 1. Есть массив объектов:
// hubs = [
// {w : 10, {banner : {id : 12356}}}, 
// {w : 130, {banner : {id : 12356}}}, 
// {w : 20, {banner : {id : 12356}}}]; 
// w – это весы соответствующих баннеров. 
// Необходимо написать функцию которая будет возвращать произвольный баннер, 
// используя веса как вероятность показа этого баннера. 
// Например если у одного баннера w=10 а у другого w = 130,
// то если мы запрашиваем 140 раз то 10 раз должен выдаваться первый баннер,
// а 130 раз  другой. Количество баннеров в массиве заранее неизвестно. 
const hubs = [
    { w: 10, banner: { id: 1 } },
    { w: 130, banner: { id: 2 } },
    { w: 20, banner: { id: 3 } }
]
var result = new Array(200)
let r = 200
let k = 0
const showbanner = (hubs) => {
    for (i = 0; i < hubs.length; i++) {
        if (r - hubs[i].w > 0) {
            let l = hubs[i].w + k + 1
            for (j = k; j < l; j++) {
                result[j] = hubs[i].banner
            }
            r = r - hubs[i].w
            k = k + hubs[i].w
        } else {
            for (j = k; j < r + k; j++) {
                result[j] = hubs[i].banner
                return result;
            }
        }
    }

}
showbanner(hubs);
console.log(result)