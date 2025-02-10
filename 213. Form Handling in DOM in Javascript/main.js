let form = document.getElementById('form');
// console.log(form);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    /*  console.log(this.elements[0]);
     console.log(this["email"]); */
    //  console.log(this.elements)
    let formData = {};
    [...this.elements].forEach(e => {
        // console.log(e)
        // console.log(e.type, e.name, e.value);
        if (e.type != 'submit') {
            formData[e.name] = e.value;
        }
    });
    console.log(formData);
    this.reset();

});
