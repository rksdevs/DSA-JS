function titleCase(str) {
    let newString;
    //traverse through the string
    for(let i = 0; i < str.length; i++) {
        //check the previous char and match it if its " "
        if(i === 0) {
             //change the current letter to uppercase or else change it to smaller case
             newString = str[i].toUpperCase();
        } else if (str[i-1] === " ") {
            newString += str[i].toUpperCase();
        } else {
            newString += str[i].toLowerCase();
        }
    }
    return(newString)
}

module.exports = titleCase;
