
// কোন ফাংশন এর বডির ভিতরে যদি বাহির থেকে কোন primitive data  পাঠানো হয় তখন সেই ফাংমন বডির ভিতরে primitive data-র মান চেঞ্জ হয়ে বাহিরে হয় না। 
// primitive data 
var n = 10;

function change(n) {
    n += 100;
    console.log(n);
}
change(n);
console.log(n);


// object type data 
// কোন ফাংশন এর বডির ভিতরে যদি বাহির থেকে কোন object type  data  পাঠানো হয় তখন সেই ফাংমন বডির এবং ফাংমন বডির বাহরে  object type data-র মান চেঞ্জ হয়ে।
//  object mutable, এক জায়গায় change করলে সব জায়গায় changeহয়।   

var obj = {
    a: 10,
    b: 20
};

function changeMe(obj) {
    obj.a = obj.a + 100;
    obj.b = obj.b + 200;
    console.log(obj);
}

changeMe(obj);
console.log(obj);