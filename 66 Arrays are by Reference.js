let a = [1,2,3]
let b = a
b[0] = 5
console.log(a[0])

let c = [1,2,3]
let d = Array.from(c)[0]
console.log(d)