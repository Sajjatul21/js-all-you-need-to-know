const xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/users');

xhr.onreadystatechange = function (e) {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            // console.log(xhr.response);
            let response = JSON.parse(xhr.response);
            console.log(response);
        }
        else {
            console.log(xhr.status);
        }
    }
};

xhr.send();