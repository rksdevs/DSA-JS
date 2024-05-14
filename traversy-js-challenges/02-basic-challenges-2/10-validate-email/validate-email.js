function validateEmail(address) {
    if (address.includes("@")) {
        const startIndex = address.indexOf("@")
        if (startIndex === 0) {
            return false
        }
        let newString = address.substring(startIndex + 1);
        if (newString.includes(".")) {
            return true
        }
    }
    return false
}

module.exports = validateEmail;
