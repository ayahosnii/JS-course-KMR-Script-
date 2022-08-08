let arr = [6,8,1,5,3,12];
    console.log(arr.reduce((p,c) => p+c))
    console.log(arr.reduceRight((p,c) => p+c))
    console.log(arr.reduce((p,c) => p-c))
    console.log(arr.reduceRight((p,c) => p-c))

/*
* p = 6+8=14+1=15+5=20+3=23+12=35
* */

console.log(arr.reduce((p,c,i) => p+c+i))


/*
*i = index = 1,2,3 ... etc
* p = 6+8+(1)=15+1+(2)=18+5+(3)=26+3+(4)=33+12+5=50
* */

