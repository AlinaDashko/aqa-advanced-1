const users = [
    {
        name: "Stive",
        email: "stivetalle@gmail.com",
        age: 18
    },
    {
        name: "Lilu",
        email: "lilutalle@gmail.com",
        age: 18
    }
];

for (const user of users) {
    const { name, email, age } = user;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
}