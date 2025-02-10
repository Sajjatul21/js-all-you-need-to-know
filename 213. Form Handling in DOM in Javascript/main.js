let form = document.getElementById('form');
// console.log(form);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    /*  console.log(this.elements[0]);
     console.log(this["email"]); */
    [...this.elements].forEach(e => {
        console.log(e.type, e.name, e.value);
    });

});
