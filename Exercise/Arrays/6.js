let input = 247669 //original integer
let arr = [] //declare array

let inputToString = Array.from(String(input), Number); //convert integer to array named inputToString

console.log(inputToString);

    for (i=0; i<=inputToString.length-1; i++) { //for loop
        if ((inputToString[i-1] % 2 === 0) && (inputToString[i] % 2 === 0)) { //check if item on left is 0 and also this item is zero
            arr.push('-',inputToString[i]) //if so prints - and this item
                    }
        else
            arr.push(inputToString[i]) //if not prints just this item
    }

console.log(arr.join()) //prints array named arr converted back to string