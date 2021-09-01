function swapCase (letters) {
    let newLetters="";
    for (i=0; i<letters.length; i++) {
        if(letters[i] === letters[i].toLowerCase()){
            newLetters += letters[i].toUpperCase()
        }
        else (
            newLetters += letters[i].toLowerCase()
        )
    }
    console.log(newLetters);
}

let text = ("The Quick Brown Fox");
console.log(swapCase(text));