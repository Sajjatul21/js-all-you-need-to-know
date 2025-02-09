
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


let firstChild = list.firstElementChild;
setTimeout(() => {
    firstChild.innerHTML = firstChild.innerHTML + " (Modified)";
    firstChild.classList.add("text-success");
    firstChild.style.background = '#DAF7A6';

}, 5000);

let lastItem = list.lastElementChild.cloneNode(true);
lastItem.innerHTML = 'Five';
list.append(lastItem);


/* console.log(list.attributes);
console.log(list.getAttributeNames())
console.log(list.getAttributeNode('id'))
console.log(list.getAttributeNode('class'))
console.log(list.id)
console.log(list.className)
console.log(list.classList) */

// lastItem.id ='last-item'
lastItem.setAttribute('id', 'last-item');

let attr = document.createAttribute('title');
attr.value = 'I am Title';

lastItem.setAttributeNode(attr);