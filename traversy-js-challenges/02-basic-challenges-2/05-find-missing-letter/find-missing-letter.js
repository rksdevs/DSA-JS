function findMissingLetter(arr) {
    //grab first letter's charCodeAt
    let start = arr[0].charCodeAt(0)
    
    //take total length of the array
    let arrlenth = arr.length;
    //create a loop starting from the first elements charCodeAt till length of the array
    for (let i = start; i <= arrlenth + start; i ++) {
        //for each iteration, convert the charCodeAt to letters and check if it is included in the original array
        if(!arr.includes(String.fromCharCode(i))) {
            return String.fromCharCode(i)
        }
    }
}

module.exports = findMissingLetter;
