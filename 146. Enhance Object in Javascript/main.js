let a = 10, b = 20;

var obj = {

    a,
    b,
    /*
     print: function(){
        console.log(this)
    } 
    */
    print() {
        console.log(this);
    }
};
obj.print();