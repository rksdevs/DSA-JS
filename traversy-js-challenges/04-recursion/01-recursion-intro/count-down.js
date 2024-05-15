function countDown(num) {
    //base case
    if(num <= 0) {
        console.log("All done!")
        return;
    }
    console.log(num);
    countDown(num - 1)
}

module.exports = countDown;
