/*
 যখন আমরা normal function call করি তখন সে window object কে refer করে । আমরা
 বলে দিতে পারি call, apply, bind এর মাধ্যমে তুমি window object refer না করে আমাদের
 দেওয়া object কে refer করো।
*/
// একাটা function যখন different object share করে তখন আমরা  call, apply, bind use করব।

function myFunc(c, d) {
    console.log(this);
    console.log(this.a + this.b + c + d); //a এবং b-এর মান window object নাই তাই তাদের মান undefine আসছে । undefine undefine যোগ করলে আসবে।
}
// myFunc();

// call
/* myFunc.call({})
myFunc() */
// myFunc.call({ a: 10, b: 20 });

// apply
// myFunc.apply({ a: 10, b: 20 }, [40, 50]);


//bind
// bind don't call a function  instantly
// myFunc.bind({a:7,b: 4},5,6)


/* var testBind = myFunc.bind({a: 5, b:4},10,10)
testBind() */

var testBind = myFunc.bind({ a: 5, b: 4 });
testBind(10, 10);

// follow this link: https://www.notion.so/115-Bind-Call-Apply-in-Javascript-80eea80c74af4431ac2eeee58600272a
