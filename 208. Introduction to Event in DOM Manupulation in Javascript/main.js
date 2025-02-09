let btn = document.getElementById("btn");
// console.log(btn);

/* btn.onclick = function (e) {
    console.log(e);
};
 */

let list = document.getElementById("list");
btn.addEventListener("click", function (e) {
    let item = list.lastElementChild.cloneNode(true);
    item.innerHTML = 'Newly Created Item';
    list.appendChild(item);
});

let box = document.getElementById("box");
box.addEventListener('mousemove', function (e) {
    // console.log(e)

    /*  document.getElementById('x-value').innerHTML = e.clientX
     document.getElementById('y-value').innerHTML = e.clientY
  */

    document.getElementById('x-value').innerHTML = e.offsetX;
    document.getElementById('y-value').innerHTML = e.offsetY;

    if (e.offsetX == 50 && e.offsetY == 50) {
        console.log('50 50');
    }
});