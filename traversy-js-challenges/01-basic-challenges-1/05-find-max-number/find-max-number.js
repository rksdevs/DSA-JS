function findMaxNumber(arr) {
    let largestNumber = 0;
    arr.forEach(element => {
        if(element > largestNumber) {
            largestNumber = element
        }
    });

    return largestNumber;

    // return Math.max(...arr)
}

module.exports = findMaxNumber;
