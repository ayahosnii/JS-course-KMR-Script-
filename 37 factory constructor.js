/*function person(name, age) {
    return {
        name,
        age
    }
}

let me = person('mostafa', 20)
let friend = person('mhmd', 21)

console.log(me)
console.log(friend)
*/
function person(name, age) {
    this.name = name
    this.age = age
}

let me = new person('aya', 23)
let sister = new person('aya', 20)

console.log(me)
console.log(sister)