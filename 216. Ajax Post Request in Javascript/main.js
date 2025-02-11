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
            
    }
    else {
        alert("Please provide Every Details");
    }
});