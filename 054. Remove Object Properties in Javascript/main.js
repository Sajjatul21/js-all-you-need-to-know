var point = {
    x: 10,
    y: 20,
    z: 30
};

// point.a = undefined  its wrong idea
// console.log(point)

delete point.x;
console.log(point);