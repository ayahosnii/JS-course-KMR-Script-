let a = [1,2,3,4,5,6]
console.log (
    'a  =>',
    '[1,2,3,4,5,6]',

    '//// a.push(1) =>',
    a.push(1), //Add number at the end of array
   ' a = [1, 2, 3, 4, 5, 6, 1]',


    '//// a.unshift(1,2,3) =>',
    a.unshift(1,2,3), //Add number at the first of array
    'a =[1, 2, 3, 1, 2, 3, 4, 5, 6]',

        '//// a.pop() =>',
            a.pop(), //Delete number at the end of array
            'a = [1, 2, 3, 4, 5]',

        '//// a.shift() =>',
        a.shift(), ////Add number at the first of array
        'a = [2, 3, 4, 5, 6]',


        '//// a.splice(3, 0, `hello`, `world`) =>',
        a.splice(3, 0, `hello`, `world`), ////Add number at the first of array
        a,
        'a = [2, 3, 1, \'hello\', \'world\', 2, 3, 4, 5, 6]',


        '//// a.splice(3, 2) =>',
        a.splice(3, 2), //['hello', 'world']
        a, //[2, 3, 1, 2, 3, 4, 5, 6]



)