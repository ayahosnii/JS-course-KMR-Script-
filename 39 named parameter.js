function f(x,y) {
    console.log(x, y)
}
    //f(x: any, y: any): void
f( x = 5, y = 6)

function f(o) {
   /*let x = o.x
    let y = o.y*/

    let {x, y} = o
    console.log(x, y)
}

f({
    y: 4,
    x: 2
})