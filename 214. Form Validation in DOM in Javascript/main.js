let form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = false;
    let formData = {};
    [...this.elements].forEach(e => {
        if (e.type != 'submit') {
            isValid = validator(e);
            if (isValid) {
                formData[e.name] = e.value;
            }
            else {
                alert(`${e.name} is Required`);
            }
        }
    });
    if (isValid) {
        console.log(formData);
        this.reset();
    }
});

function validator(el) {
    console.log(el);
    if (!el.value) {
        return false;
    }
    return true;
}