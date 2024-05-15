const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */

const numbersIncreamentByOne = numbers.map((elem)=> elem + 1)
console.log(numbersIncreamentByOne);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const numbersFiltered = numbers.filter((elem)=> elem < 4)
console.log(numbersFiltered)

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const reducedArray = numbers.reduce((acc,elem)=> {elem * acc}, 1)
console.log(reducedArray)

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

numbers.forEach((elem)=> console.log(elem + 1));

 /**
 * find: Returns the first array element that satisfies a specified condition.
 */
const firstEvenNumber = numbers.find((elem)=> elem % 2 === 0);
console.log(firstEvenNumber);

/**
 * some: Checks if at least one array element satisfies a condition.
 */

 const hasAnyEvenNumber = numbers.some((elem)=> elem % 2 === 0)
 console.log(hasAnyEvenNumber)

/**
 * every: Checks if all array elements satisfy a condition.
 */

const allEvenNumbers = numbers.every((elem)=> elem % 2 === 0);
console.log(allEvenNumbers);
