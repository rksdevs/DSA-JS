function isPalindrome(str) {
    //while traversing the string -- we need to check two things separately
    let newStr = str.toLowerCase().replace(/[, ]/g, "");
    console.log(newStr)
    for (let i = 0; i < newStr.length; i++) {
        if(newStr[i] !== newStr[newStr.length-1 - i]) {
            return false
            // console.log(newStr[i],str[newStr.length-1-i])
        }
    }
    return true
}

module.exports = isPalindrome;
