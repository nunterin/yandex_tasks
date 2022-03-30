function checkCashRegister(price, cash, cid) {

    var change = 100 * (cash - price);
    var availableFunds = 0;

    var moneyValues = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
    var amtToReturn = [];

    for (var i = cid.length - 1; i >= 0; i--) {
        var amt = 0;
        while (moneyValues[i] <= change && cid[i][1] > 0 && change > 0) {

            cid[i][1] -= moneyValues[i] / 100; // reduce amount in cid
            change -= moneyValues[i]; // reduce amount from change
            amt += moneyValues[i] / 100; // keep track of how much money was taken out of cid
        }
        if (amt !== 0) {
            // adds record of amount taken out of cid
            amtToReturn.push([cid[i][0], amt]);
        }
    }


    // if there is still some change left over
    if (change !== 0) {

        return {
            status: "INSUFFICIENT FUNDS",
            change: []
        }
    }

    // if there is any money left in cid, it returns amtToReturn
    for (var j = 0; j < cid.length; j++) {
        if (cid[j][1] > 0) {

            return {
                status: "OPEN",
                change: amtToReturn
            }
        }
    }
    amtToReturn[0][1] = amtToReturn[0][1].toFixed(1)
    for (i = 1; i < cid.length; i++) {
        amtToReturn.push(cid[i])
    }
    return {
        status: "CLOSED",
        change: amtToReturn
    }
}

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]));