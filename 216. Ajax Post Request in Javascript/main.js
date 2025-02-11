let postForm = document.getElementById('post-form');
let posts = document.getElementById('posts');
let URL = `https://jsonplaceholder.typicode.com/posts`;

postForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let title = this.title.value || undefined;
    let body = this.body.value || undefined;

    if (title && body) {
        let postObj = {
            userId: 100,
            title,
            body
        };
        fetch(URL, {
            method: "POST",
            headers: {
                'content-type': 'Application/JSON'
            },
            body: JSON.stringify(postObj)
        })
            .then(response => response.json())
            .then(post => {
                let item = listItemGenerator(post);
                posts.appendChild(item);
                this.reset();
            })

            .catch(e => console.log(e.message));
    }
    else {
        alert("Please provide Every Details");
    }
});

function listItemGenerator(item) {
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `<p>${item.id}. ${item.title} by user Id: ${item.userId}</p> \n
    <p>${item.body}</p>`;

    return li;
}