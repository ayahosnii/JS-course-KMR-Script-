let myPower = function (x =1 , n=0){
    let r=1
    for (let i = 0; i < n; i++) r*=x
    return r
    
}
console.log(myPower(2,3))

function returnPower() {
    return function (x =1 , n=0){
        let r=1
        for (let i = 0; i < n; i++) r*=x
        return r
    }
}

let myPowerr = returnPower()
console.log(myPower(2,3))