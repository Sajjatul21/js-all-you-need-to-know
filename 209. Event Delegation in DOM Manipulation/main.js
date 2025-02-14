let btn = document.getElementById("btn");

let list = document.getElementById("list");
btn.addEventListener("click", function (e) {
    let item = list.lastElementChild.cloneNode(true);
    item.innerHTML = 'Newly Created Item';
    list.appendChild(item);
});

/* event delegation problem */
/* [...list.children].forEach(li => {
    li.onclick = function (e) {
        e.target.remove();
    };
}); */

list.addEventListener('click', function (e) {
    // console.log(this.contains(e.target));
    if (this.contains(e.target)) {
        e.target.remove();
    }
});

let box = document.getElementById("box");
box.addEventListener('mousemove', function (e) {

    document.getElementById('x-value').innerHTML = e.offsetX;
    document.getElementById('y-value').innerHTML = e.offsetY;

    if (e.offsetX == 50 && e.offsetY == 50) {
        console.log('50 50');
    }
});