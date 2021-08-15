let first = [15, 23, 34, 48, 50];
let second = [6, 7, 8, 9, 10];

for (i = 0; i < first.length; i++) {
    if (first[i] % 2 == 0) {
        console.log(first[i]);
    }
}

for (i = 0; i < second.length; i++) {
    if (second[i] % 2 != 0) {
        console.log(second[i]);
    }
}
