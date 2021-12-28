class A {
    constructor(...arg) {
        this.a = arg[0];
        this.o = arg[1];
        this.u = arg[2];
    }
}


A.newistance = function(...arg) {
    let die = new A();
    let keys = Object.keys(die);
    for (i = 0; i < keys.length; i++) {
        die[keys[i]] = arg[i];

    }
    return die;
}
b = A.newistance(1, 2, 3);
console.log(b)