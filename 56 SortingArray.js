let arr = [6,8,1,5,3]
console.log (
    'arr  =>',
    '[6,8,1,5,3]',

    '//// arr.sort() =>',
    arr.sort(function (a,b){
        /*
        * 0
        * + ==> b
        * - ==> a
        * */
        if (a < b) return +1
        else if (a > b ) return -1
        else return 0
    }),

    arr.sort( (a,b) =>{
        /*
        * 0
        * + ==> b
        * - ==> a
        * */
        if (a < b) return +1
        else if (a > b ) return -1
        else return 0
    }),

  /*
  * 6,8
  * 6 > 8 ==> -
  * 6 < 8 ==> +
  *
  * a - b ==> 6 - 8 = -2 ==> up
  * b - a ==> 8 - 2 = +2 ==> down
  * */

    arr.sort( (a,b) =>{
        /*
        * 0
        * + ==> b
        * - ==> a
        * */
        return a-b // up
/*
        return b-a  // down
*/
    }),

    arr.sort( (a,b) => b - a)

)