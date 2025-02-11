let load = document.getElementById("load");
let postList = document.getElementById("posts");

const url = `https://jsonplaceholder.typicode.com/posts`;
load.addEventListener('click', function () {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
});