
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

/* let p1 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sint blanditiis beatae dicta dolorum odio quas laboriosam molestias fuga omnis.');
let p2 = createElement('p', 'lead', 'Ipsum dolor sit amet consectetur adipisicing elit. Et sint blanditiis beatae dicta dolorum odio quas laboriosam molestias fuga omnis.');

let div = createElement('div');
append(div, [p1, p2]);


list.insertAdjacentElement('beforeend', div);
 */
let firstChild = list.firstElementChild;
setTimeout(() => {
    firstChild.innerHTML = firstChild.innerHTML + " (Modified)";
    firstChild.classList.add("text-success");
    firstChild.style.background = '#DAF7A6';

}, 5000);

let lastItem = list.lastElementChild.cloneNode(true);
// lastItem.innerHTML = 'Five';
list.append(lastItem); 