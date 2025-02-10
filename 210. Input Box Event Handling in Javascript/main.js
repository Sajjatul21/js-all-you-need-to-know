let name = document.getElementById('name');
// console.log(name);
name.addEventListener('keypress', function (event) {
    // console.log(event);
    if (event.key == "Enter") {
        // console.log(event.target.value);
        document.getElementById('show-name').innerHTML = `Your Name is ${event.target.value}`;
        event.target.value = '';
    }
});