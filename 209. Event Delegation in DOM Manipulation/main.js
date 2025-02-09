let btn = document.getElementById("btn");

let list = document.getElementById("list");
btn.addEventListener("click", function (e) {
    let item = list.lastElementChild.cloneNode(true);
    item.innerHTML = 'Newly Created Item';
    list.appendChild(item);
});

let box = document.getElementById("box");
box.addEventListener('mousemove', function (e) {

    document.getElementById('x-value').innerHTML = e.offsetX;
    document.getElementById('y-value').innerHTML = e.offsetY;

    if (e.offsetX == 50 && e.offsetY == 50) {
        console.log('50 50');
    }
});