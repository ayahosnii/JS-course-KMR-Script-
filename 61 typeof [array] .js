let arr = [1,3,6,9,3];
let arr2 = [
    [1,2],
    [3,4],
    [5,6]
];
   arr2[1][0]

for (let a of arr2){
    for (let b of a){
        console.log(b)
    }
}

for (let i = 0; i < arr2.length; i++){
    for (let j = 0; j < arr[i].length; j++){
        console.log(arr2[i][j])
    }
}