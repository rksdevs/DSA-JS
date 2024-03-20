function countOccurrences(str, r) {
    let counter = 0;
    for(let i = 0; i<= str.length; i ++ ) {
        if (str[i] === r) {
            counter ++;
        }
    }
    return counter;
}

// const countOccurrences = (str, char) => str.split(char).length -1;
// const countOccurrences = (str, char) => {
//     console.log(str.split(char));
// }

module.exports = countOccurrences;
