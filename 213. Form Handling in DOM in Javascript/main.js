let form = document.getElementById('form');
// console.log(form);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // console.log(event);
    // console.log(this.length)
    this.forEach(el => {
        console.log(el);// we canot use foreach loop because its html collection 
    });


});
