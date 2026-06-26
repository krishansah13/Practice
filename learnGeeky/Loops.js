// let count = 0;
// for(var i = 0; i < 5; i++) {
//     count++;
// }
// console.log(count , i);

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(let i = 0 ; i < matrix.length; i++) {
    for(let j = 0 ; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
} 

let fruits = ["Apple", "Mango", "banana"]

matrix.forEach(function(mat, index) {
    console.log(mat, index)
})