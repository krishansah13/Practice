let arr = [10, 20, 30, 40, 50, 60];

// console.log(arr.slice(1, 4));

// console.log("Before changing :" + arr);

// console.log(arr.splice(1, 3, 90));

// console.log(arr);

arr.push(70);
console.log(arr);

console.log(arr.pop());
console.log(arr);

console.log(arr.map((elem)=>elem*2));
console.log(arr)

console.log(arr.filter((num)=>num%3 == 0))

for(let ele of arr) console.log(ele);
console.log(arr.reduce((sum, n)=>sum+n, 0))