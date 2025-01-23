/*
 যখ ন আমরা normal function call করি তখন সে window object কে refer করে । আমরা
 বলে দিতে পারি call, apply, bind এর মাধ্যমে তুমি window object refer না করে আমাদের
 দেওয়া object কে refer করো।
*/
// একাটা function যখন different object share করে তখন আমরা  call, apply, bind use করব।

function myFunc() {
    console.log(this)
    console.log(this.a + this.b); //a এবং b-এর মান window object নাই তাই তাদের মান undefine আসছে । undefine undefine যোগ করলে আসবে।
}
myFunc();

// call 
/* myFunc.call({})
myFunc() */
myFunc.call({a:10, b: 20})