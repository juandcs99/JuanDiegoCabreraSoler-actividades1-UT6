'use strict';
let array = new Array(1,2,"hola",true);
console.log(array)

let i = 0;
while(i < array.length)
console.log(array[i++]);

for(let i in array)
    console.log(array[i])

console.log(array.join(" "))
console.log(array)

