let form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    let formData = {};
    [...this.elements].forEach(e => {
        if (e.type != 'submit') {
            formData[e.name] = e.value;
        }
    });
    console.log(formData);
    this.reset();

});
