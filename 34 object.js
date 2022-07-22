let obj = {
    name: 'mostafa',
    age: 20,
    walk: function () {
        console.log('walked')
    },
    getInfo() {
        let printInfo = () => {
        console.log(this.name + ' ' + this.age)
        printInfo()
        }
    
    /*
    getInfoo() {
        let that = this
        function printInfo() {
            console.log(that.name + ' ' + that.age)
           // console.log(this)
        }
    */
    /*getInfo() {
        console.log(this.name + ' ' + obj.age)
        function printInfo(){
            console.log(this.name + ' ' + obj.age)
        },*/
    
    }
    }

obj.city = ""
console.log(obj)
delete obj.city
console.log(obj)
obj.walk()
//obj.getInfo()
//obj.getInfoo()