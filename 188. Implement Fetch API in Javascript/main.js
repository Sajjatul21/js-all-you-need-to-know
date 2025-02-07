const BASE_URL = 'https://jsonplaceholder.typicode.com';

fetch(`${BASE_URL}/users/1`)
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        return Promise.resolve("Something");
    })

    .then(str => {
        console.log(str);
        return Promise.resolve("Another Promises");
    })
    .then(another => {
        console.log(another);
    })
    .catch((e) => {
        console.log(e);
    });

