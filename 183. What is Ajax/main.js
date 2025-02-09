function getRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url);

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
getRequest('https://jsonplaceholder.typicode.com/users', function (error, response) {
    if (error) {
        console.log(error);
    }
    else {
        // console.log(response);
        response.forEach(res => {
            console.log(res);
        });
    }
});

// another request 

getRequest('https://jsonplaceholder.typicode.com/posts', function (err, res) {
    if (err) {
        console.log(err);
    }
    else {
        // console.log(res)
        res.forEach(function (r) {
            console.log(r.title);
            // console.log(r["title"]);
        });
    }
});