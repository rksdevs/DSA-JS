function formatPhoneNumber(arr) {
    let newArr = [];
    let counter = 0
    for (let i = 0; i < 14; i++) {
        if(i === 0) {
            newArr.push("(");
        } else if (i === 4) {
            newArr.push(")")
        } else if (i  === 5) {
            newArr.push(" ")
        } else if (i === 9) {
            newArr.push("-")
        } else {
            newArr.push(arr[counter]);
            counter ++
        }
    }
    return newArr.join("")
}

module.exports = formatPhoneNumber;
