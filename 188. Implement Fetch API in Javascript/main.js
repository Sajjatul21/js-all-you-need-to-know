const BASE_URL = 'https://jsonplaceholder.typicode.com';

/* fetch(`${BASE_URL}/users/1`)
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
 */


function getRequest(url, callback) {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open('get', url);

        xhr.onreadystatechange = function (e) {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    let response = JSON.parse(xhr.response);
                    // callback(null, response);
                    resolve(response);
                }
                else {
                    // callback(xhr.status, null);
                    // reject(new Error(xhr.status));
                    reject(new Error('Error occurred'));
                }
            }
        };
        xhr.send();
    });
}

/* let res =getRequest(`${BASE_URL}/users/1`)
console.log(res) */

getRequest(`${BASE_URL}/users/142`)
    .then(res => console.log(res))
    .catch(err => console.log(err.message));