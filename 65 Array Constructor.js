let arr = Array(1,2,3);
console.log(arr)

let arr2 = Array(5);
console.log(arr2)

let arr3 = Array.of(5,);
console.log(arr3)

let arr4 = Array.from("hello"); //=>split
console.log(arr4)


let a = Array.from({length: 5}, (e,i)=>i); //=>split
console.log(a)

let b50 = Array.from({length: 50}, (e,i)=>i); //=>split
console.log(b50)