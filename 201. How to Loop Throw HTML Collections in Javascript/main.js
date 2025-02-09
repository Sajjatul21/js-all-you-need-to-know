let listitem = document.getElementsByTagName('li');

let listitems = Array.from(listitem);  //Array.from() হল একটি বিল্ট-ইন জাভাস্ক্রিপ্ট মেথড, যা যেকোনো ইটারেবল (iterable) অথবা অ্যারে-লাইক (array-like) অবজেক্টকে একটি নতুন অ্যারে তে রূপান্তর করে

listitems.forEach((i, index) => {
    // console.log(i, index);
    let text = i.innerHTML;
    i.innerHTML = `(${index + 1}) ${text}`;
});