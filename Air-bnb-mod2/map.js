/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/

const numArray = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squares = numArray.map(x => x * x) 
    

console.log(squares)

/* or*/

const numbers = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const square = numbers.map(function(num) {
    return num * num
})

console.log(square)
