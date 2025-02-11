let postForm = document.getElementById('post-form');
let posts = document.getElementById('posts');

postForm.addEventListener('submit', function (e) {
    e.preventDefault();
    /*   console.log(event)
  
      console.log(this.title)
      console.log(this.body) */
    let title = this.title.value || undefined;
    let body = this.body.value || undefined;
    /*  console.log(title);
     console.log(body); */
    if (title && body) {
        let postObj = {
            userId: 100,
            title,
            body
        };
    }

});