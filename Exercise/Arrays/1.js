//simplified function declaration
let is_array = function(input) { //declare function for "input"
    if (toString.call(input) === "[object Array]") //toString.call = condition if the object is array
        return true; // if its array return true
    return false;
};

console.log(is_array("w3resource")); //"input" is w3resource - not array
console.log(is_array([1,2,4,0])); // input is 12340 = array


//standard function declaration
function isArray(input) {
    return true;
}

console.log(isArray([]));