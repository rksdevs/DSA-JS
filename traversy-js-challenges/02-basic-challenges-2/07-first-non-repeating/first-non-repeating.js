function findFirstNonRepeatingCharacter(str) {
    const resultArr = [];

    let obj = {}

    for(let i = 0; i<str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]] ++
        } else {
            obj[str[i]] = 1
        }
    }

    for (const key in obj) {
        if(obj[key] === 1) {
            return key
        }
    }

    return null
}

module.exports = findFirstNonRepeatingCharacter;
