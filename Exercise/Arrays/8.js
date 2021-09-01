var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function frequent(number){ //function with argument "number"
    var sortedNumber = number.sort(); //variable that sorts whats inside the argument "number"
    var start = number[0], item; //variable that takes index 0 from not sorted argument "number" and ITEM
    for(var i = 0 ;  i < sortedNumber.length; i++){ //for loop
        if(start === sortedNumber[i] || sortedNumber[i] === sortedNumber[i+1]){ //
            item = sortedNumber[i]
        }
    }
    return item

}

console.log( frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))