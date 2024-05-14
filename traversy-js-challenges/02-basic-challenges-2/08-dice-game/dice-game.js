function diceGameSimulation(n) {
    const result = []
    for (let i = 0; i < n; i ++){
        let obj = {
            dice1: 0,
            dice2: 0,
            sum: 0,
            result: "roll again",
        }
        const dice1 = Math.floor(Math.random()*6 + 1)
        const dice2 = Math.floor(Math.random()*6 + 1)
        if(dice1 + dice2 === 7 || dice1 + dice2 === 11) {
            obj.dice1 = dice1;
            obj.dice2 = dice2;
            obj.sum = dice1 + dice2;
            obj.result = "win";
        } else if (dice1 + dice2 === 2 || dice1 + dice2 === 3 || dice1 + dice2 === 12) {
            obj.dice1 = dice1;
            obj.dice2 = dice2;
            obj.sum = dice1 + dice2;
            obj.result = "lose";
        } else {
obj.dice1 = dice1;
            obj.dice2 = dice2;
            obj.sum = dice1 + dice2;
            obj.result = "roll again";
        }
        result.push({...obj})
        
    }
    return result
}

module.exports = diceGameSimulation;
