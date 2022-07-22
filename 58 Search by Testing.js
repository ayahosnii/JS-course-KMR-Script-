let arr = [6,8,1,5,3];
let result = arr.find(e => e > 0);
let result_every = arr.every(e => e > 0);
let result_some = arr.some(e => e > 0);

console.log (
    result,
    result_every
)

