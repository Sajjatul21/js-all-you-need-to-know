let person = {
    name: 'Shihab',
    email: "shihab@example.com",
    address: {
        city: "Chandpur",
        country: "Bangladesh"
    }
};
let { name, email, address, address: { city, country } } = person;
console.log(name);
console.log(email);
console.log(address);
console.log(city);
console.log(country);
