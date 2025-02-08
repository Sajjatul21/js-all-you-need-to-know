let list = document.getElementById('list');
// console.log(list)

const parent = list.parentElement;
console.log(parent);

const children = list.children;
console.log(children);

// console.log(list.previousSibling)
console.log(list.previousElementSibling);
console.log(list.nextElementSibling);

let li = document.querySelector('li');
console.log(li.nextElementSibling);

// console.log(list.firstChild) // give us any node
console.log(list.firstElementChild);
console.log(list.lastElementChild);