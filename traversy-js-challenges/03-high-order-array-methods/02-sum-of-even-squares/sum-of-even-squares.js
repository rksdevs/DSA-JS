function sumOfEvenSquares(arr) {
    const result = arr.filter((elem)=> elem % 2 === 0).map((elem)=> elem * elem).reduce((acc, element) => element + acc, 0);
    return result;
}

module.exports = sumOfEvenSquares;
