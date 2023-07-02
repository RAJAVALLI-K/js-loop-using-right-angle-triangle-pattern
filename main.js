// Right angle triangle pattern using

let value = 5;
let num = "";
for (let i = 1; i <= value; i++) {
    for (let j = 0; j < value - i; j++) {
        num += " ";
        // console.log(num);
    }
    for (let k = 0; k < i; k++) {
        num += "*";
    }
    num += "\n";
}
console.log(num);