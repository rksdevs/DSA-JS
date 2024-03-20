function reverseString(str) {

    //standard for loop
    // let result = "";
    // for(let i = str.length - 1; i >= 0 ; i-- ) {
    //     result += str[i];
    // }
    // return result

    //string splitting and joining 
    // let arrayOfString = str.split("");
    // let resultArray = [];
    // for(let i = arrayOfString.length - 1; i >= 0 ; i-- ) {
    //     resultArray.push(arrayOfString[i]);
    // }

    // return resultArray.join("")

    //using array.reverse prototype method
    return str.split("").reverse().join("")
}

module.exports = reverseString;
