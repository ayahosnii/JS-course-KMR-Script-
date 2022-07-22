/*
if (x == 1) console.log('x is one')
else if (x == 2) console.log('x is two')
else if (x == 3) console.log('x is three')
else console.log('Unknown')
*/

let x = 3
switch (x) {
    case 1: {
        console.log('x is one')
    }
    case 2: {
        console.log('x is two')
    }
    case 3:{
        console.log('x is three')
        break 
    }
    default:
        console.log('Unknown')
        
}
