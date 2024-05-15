function generateHashtag(str) {
    //str is empty return false
    //str length should not be more than 140 if so return false
    if(str.length === 0 || str.length > 140) return false
    //str has only white spaces return false
    if(!str.split(" ").join("").length) return false
    
    //for each we can use a function to capitalize first letter
    //capitalize 1st char of the word
    //can use slice to grab 1st letter and toUpperCase
    //can use slice to grab the remaining and concat them
    const capitalize = (string) => {
        let firstLetter = string.slice(0, 1).toUpperCase();
        let remainingLetters = string.slice(1, string.length)
        return `${firstLetter}${remainingLetters}`
    }
    //add # at front
    let resultArray = ["#"]
    //remove white space
    str.split(" ").forEach((elem)=> {
        const newWord = capitalize(elem);
        resultArray.push(newWord)
    });
    //join the words with no space
   return resultArray.join("")
    
}
module.exports = generateHashtag;
