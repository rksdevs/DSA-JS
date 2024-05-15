function validAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    let strOneArray = str1.split("");
    let strTwoArray = str2.split("");

    let strOneObj = {}
    strOneArray.forEach(element => {
        if(!strOneObj[element]) {
            strOneObj[element] = 1;
        } else {
            strOneObj[element] += 1;
        }
    });
    let strTwoObj = {}
    strTwoArray.forEach(element => {
        if(!strTwoObj[element]) {
            strTwoObj[element] = 1;
        } else {
            strTwoObj[element] += 1;
        }
    });

    for (const elem of strOneArray) {
         if(strOneObj[elem] !== strTwoObj[elem] || !strTwoObj[elem]){
            return false;
        }
    }
    return true
}

module.exports = validAnagrams;
