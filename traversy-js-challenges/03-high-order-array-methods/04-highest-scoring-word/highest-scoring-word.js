function highestScoringWord(str) {
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    let alphabet = {};
    let counter = 1
    //create the alphabet dictionary with the values next to the element
    letters.forEach((elem)=> {
        alphabet[elem] = counter;
        counter ++
    })
    //split the sentence into an array of words
    let wordsArray = str.toLowerCase().split(" ");
    // console.log(wordsArray)
    //iterate over each element of the word, reduce them to the total score
    let scoreArray = wordsArray.map((elem)=> elem.split("").reduce((sum, item)=> sum + alphabet[item], 0))
    // console.log(scoreArray)
    //grab the index of the highest score
    let highestScore = 0;
    let highestScoreIndex = 0
    scoreArray.forEach((elem)=> {
        if(elem > highestScore) {
            highestScoreIndex = scoreArray.indexOf(elem);
            highestScore = elem;
        }
    })
    //grab the word at the same index
    // console.log()
    return wordsArray[highestScoreIndex]
}

module.exports = highestScoringWord;
