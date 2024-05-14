function countVowels(str) {
    let counter = 0
    let stringToCheck = str.toLowerCase();
    const checkVowel = (char) => {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            return true
        } else {
            return false
        }
    }

    for (i=0; i<stringToCheck.length; i++) {
        if(checkVowel(stringToCheck[i])) {
            counter ++
        }
    }
    return counter
}

module.exports = countVowels;
