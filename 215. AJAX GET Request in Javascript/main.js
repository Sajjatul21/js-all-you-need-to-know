let load = document.getElementById("load");
let postList = document.getElementById("posts");

const url = `https://jsonplaceholder.typicode.com/posts`;
load.addEventListener('click', function () {
    fetch(url)
        .then(response => response.json())
        .then(posts => {
            posts.forEach((post, index) => {
                let listItem = listItemGenerator(post, index + 1);
                postList.appendChild(listItem);
            });
        });
});

function listItemGenerator(item, num) {
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `(${num}) ${item.title}.`;

    return li;
}