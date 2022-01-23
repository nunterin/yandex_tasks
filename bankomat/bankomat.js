// Необходимо реализовать функцию которая получает на вход 
// количество денег которое необходимо выдавать.
// На выход возвращает объект из наминалов. 
// Объект должен быть в следующем виде:
// var nomObj = {
//  '5000' : 'count',
//  '1000' : 'count',
//  '500' : 'count',
//  '100' : 'count',
//  '50' : 'count',
// };
// Можно использовать следующие номиналы [50,100,500,1000,5000].
// Для усложненеия задачи можно еще передать лимит доступных валют.
// var limitObj = {
//  '5000' : 2,
//  '1000' : 3,
//  '500' : 5,
//  '100' : 0,
//  '50' : 1,
// };

const nomObj = {
    5000: 1,
    1000: 2,
    500: 3,
    100: 4,
    50: 5,
}

const Bankomat = (summa, bank) => {
    let given = {
        5000: 0,
        1000: 0,
        500: 0,
        100: 0,
        50: 0,
    }
    nominals = Object.keys(bank)
    nominals.sort((a, b) => b - a);
    for (i = 0; i < nominals.length; i++) {
        if (bank[nominals[i]] < 0) {
            return "not enough money"
        }
        while (summa / nominals[i] >= 1) {
            given[nominals[i]] = given[nominals[i]] + 1
            summa = summa - nominals[i]
            bank[nominals[i]] = bank[nominals[i]] - 1
        }


    }
    return given
}
console.log(Bankomat(600, nomObj))