/* let li = document.createElement('li');
console.dir(li);
li.className = 'list-group-item';
li.setAttribute('title', "I am four item");
li.innerHTML = 'Four';
let list = document.getElementById('list');
list.appendChild(li);  //appendChild accept node as parameter
 */

function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName);
    tag.className = className || '';
    tag.innerHTML = innerHTML || '';

    return tag;
}
function append(parent, children) {
    children.forEach(child => parent.appendChild(child));
}

let li = createElement('li', 'list-group-item', 'Four');
let list = document.getElementById('list');
list.appendChild(li);

let p1 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sint blanditiis beatae dicta dolorum odio quas laboriosam molestias fuga omnis.');
let p2 = createElement('p', 'lead', 'Ipsum dolor sit amet consectetur adipisicing elit. Et sint blanditiis beatae dicta dolorum odio quas laboriosam molestias fuga omnis.');

let div = createElement('div');
append(div, [p1, p2]);

let container = document.getElementById('cont');
container.appendChild(div);