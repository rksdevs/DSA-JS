function findMissingNumber(arr) {
    if (!Array.isArray(arr)) {
        return 1;
    }
    if (arr === null) {
        return undefined;
    }
    const newSortedArr = arr.sort((a,b)=> a-b)
    const newArr = Array.from({length: arr.length}, (value, index)=> newSortedArr[0] + index)
    
    for(let i=0; i<=newArr.length; i ++) {
        if (!arr.includes(newArr[i])) {
            return newArr[i]
        }
    }
}

module.exports = findMissingNumber;
