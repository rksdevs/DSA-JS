function isPalindrome(str) {
    //while traversing the string -- we need to check two things separately
    let newStr = str.replace(/[, ]/g, "");
    // console.log(newStr)
    for (let i = 0; i < newStr.length; i++) {
        if(newStr[i] !== str[newStr.length-1 - i]) {
            return false
        }
    }
    return true
}

module.exports = isPalindrome;
