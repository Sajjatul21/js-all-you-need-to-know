let obj = {
    start: 1,
    end: 3,
    [Symbol.iterator]: function () {
        let currentValue = this.start;
        const self = this;
        return {
            next() {
                return {
                    done: currentValue > self.end,
                    value: currentValue++
                };
            }
        };
    }
};
for (let v of obj) {
    console.log(v);
}

let iterate = obj[Symbol.iterator]();
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());