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

let skills = document.getElementsByName('skills');
let parent = document.getElementById('result');
let checkedSkilled = [];

[...skills].forEach(skill =>
    skill.addEventListener('change', function (event) {
        if (event.target.checked) {
            checkedSkilled.push(event.target.value);
            outputSkills(parent, checkedSkilled);
        }
        else {
            let ind = checkedSkilled.indexOf(event.target.value);
            checkedSkilled.splice(ind, 1);
            outputSkills(parent, checkedSkilled);
        }
    })
);

function outputSkills(parent, skills) {
    console.log(parent, skills);
    let result = '';
    skills.forEach((skill, index) => {
        result += `(${index + 1}) ${skill} `;
    });
    parent.innerHTML = result;
}

let list = document.getElementById('list');
list.addEventListener('dblclick', function (event) {
    if (this.contains(event.target)) {
        let innerText = event.target.innerText;
        event.target.innerHTML = '';
        let inputBox = createInputBox(innerText);
        event.target.appendChild(inputBox);
    }
});

function createInputBox(value) {
    let inp = document.createElement("input");
    inp.type = 'text';
    inp.className = 'from-control';
    inp.value = value;

    return inp;
}