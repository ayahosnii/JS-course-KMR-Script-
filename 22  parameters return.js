function power (x =1 , n=0){
    console.log(arguments)
    let r=1
    for (let i = 0; i < n; i++) r*=x
    return r
    
}
console.log('Power 1')
power(2,3)
console.log('Power 2')
power(2,3,5,6)