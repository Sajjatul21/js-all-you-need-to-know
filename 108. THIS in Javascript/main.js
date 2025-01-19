// this
// ১.this যেই objectএর মধ্যে ব্যবহার করা হবে সেই objet কে refer করবে।
// ২. object ব্যতিত this window object refer করবে।
// ৩. this এর মান execution context এর execution phase এর পেয়ে থাকে


function myFunc() {
    console.log(this);
}
myFunc()
new myFunc()