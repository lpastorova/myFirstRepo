function sum(a, b) {
    return a + b;
}

let counter;
mezivypocet = 0;
for (counter = 1; counter <= 100; counter++ ) {
    mezivypocet = sum(mezivypocet,counter);
}
console.log(mezivypocet);