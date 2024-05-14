function areAllCharactersUnique(str) {
    //use a dictionary
    let obj = {}
    //for every letter in the input create a property
    for (i = 0; i<str.length; i++){
       if(obj[str[i]]) {
        return false
       } else {
        obj[str[i]] = 1
       }
    }
    
    return true
    //if the property doesn't exist create a new property and give it a value
    //if it exists return false
    //otherwise return true 
}

module.exports = areAllCharactersUnique;
