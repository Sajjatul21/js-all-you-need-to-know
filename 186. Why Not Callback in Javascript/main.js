function getRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url);

    xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let response = JSON.parse(xhr.response);
                callback(null, response);
            }
            else {
                callback(xhr.status, null);
            }
        }
    };
    xhr.send();
}

const BASE_URL = 'https://jsonplaceholder.typicode.com';

getRequest(`${BASE_URL}/post/1`, (err, res) => {
    if (err) {
        throw new Error("Error Occurred");
    }

    let { userId } = res;
    getRequest(`${BASE_URL}/posts/1/comments/${res.id}`, (err, res) => {

        if (err) {
            throw new Error('Error Occurred');
        }
        console.log(res);
    });
});