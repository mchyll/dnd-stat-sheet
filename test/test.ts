class Test {
    constructor(public name: string) { }
    hello() { console.log(name) }
}

interface Supert {
    name: string;
}

let lol: Supert = new Test("Magnus");
console.log(lol.constructor.name);
console.log(Test.prototype);
console.log(lol instanceof Test);

let lol2: Supert = { name: "Hyll" };
console.log(lol2.constructor.name);
console.log(lol2 instanceof Test);

type tall = 1 | 2 | 3
let num: tall = 3
num += 6 as tall
