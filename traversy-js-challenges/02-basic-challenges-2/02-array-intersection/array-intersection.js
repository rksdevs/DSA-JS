function arrayIntersection(arr1, arr2) {
    // let intermediateArr = [...arr1, ...arr2];
    let resultArray = []

    for(i=0; i<arr1.length; i++) {
        if(arr2.includes(arr1[i])) {
            resultArray.push(arr1[i]);
        } else {

        }
    }

    return resultArray;
}

module.exports = arrayIntersection;
