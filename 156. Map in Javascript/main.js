let map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
]);
map.set('e', 5);
// map.set({ name: 'Shihab' }, 6);
let objKey = { name: "Shihab" };
map.set("objKey", 6);
map.delete('objKey');
// map.delete('c');
console.log(map);
console.log(map.size);
console.log(map.get("d"));

console.log(map.keys());
console.log(map.values());
console.log(map.entries());


for (let [key, value] of map) { 
    console.log(key, value);
}

map.forEach(function (value, key) {
    console.log(value, key);
});