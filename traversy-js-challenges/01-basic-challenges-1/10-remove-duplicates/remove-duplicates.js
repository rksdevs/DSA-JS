function removeDuplicates(arr) {
    const resultSet = new Set (arr)
    const resultArr = [...resultSet]
    return resultArr;
}

module.exports = removeDuplicates;
