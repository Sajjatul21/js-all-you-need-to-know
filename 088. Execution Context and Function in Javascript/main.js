abc();

function abc() {
    console.log("I am function");
}

abc();

/* 
    abc function declare করার আগে আমরা ফাংশন  call করেছি এবং সেটি আামাদের ঠিকমত রেজাল্ট ও দিয়েছে এর কারন 
    হলো function এর ক্ষেত্রে creation phase-এ function name and reference store করে। যখন আমরা ফাংশন  call করে 
    তখন v8 engine reference থেকে  আমাদের ফাংশন টা দেয়।
*/

// creation phase
// abc = reference/ identity like (xx087d)

// execution Phase
