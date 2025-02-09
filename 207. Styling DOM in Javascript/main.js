let title = document.getElementById('title');
title.style.color = 'Orange';
title.style.fontSize = '4rem';
title.style.background = '#DAF7A6';

let styleObj = {
    background: "#DAF7A6",
    fontSize: "30px",
    color: "#f02d2d"

};

let list = document.getElementById('list');
// Object.assign(list.style, styleObj);
[...list.children].forEach(li => Object.assign(li.style,styleObj));