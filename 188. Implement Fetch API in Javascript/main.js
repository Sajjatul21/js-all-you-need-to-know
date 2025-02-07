const BASE_URL = 'https://jsonplaceholder.typicode.com';

fetch(`${BASE_URL}/user/ 1`)
    .then((res) => {
        console.log(res);
        console.log(res.json());
    })
    .catch((e) => {
        console.log(e);
    });
