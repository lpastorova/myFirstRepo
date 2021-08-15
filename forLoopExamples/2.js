let first = [15, 23, 34, 48, 50];
let second = [6, 7, 8, 9, 10];
let x = 0;
let y = 0;

for (i = 0; i < first.length; i++) {
    x = x + first[i];
    y = y + second[i];

}

console.log(x + y);


// for (i = 0; i < first.length; i++) {
//     x = x + first[i];
// }
// console.log(x);
//
// for (i = 0; i < second.length; i++) {
//     y = y + second[i];
// }
//
// console.log(y);
// console.log(x + y);