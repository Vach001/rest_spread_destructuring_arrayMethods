//- Write a function which calculates average age of users.

function getAverageAge(usersGroup) {

    return usersGroup.map((user) => user.age).reduce((sum, current) => {

        return (sum + current) / usersGroup.length;
    });
};

const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        age: 56,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        age: 54,
    },
];
console.log(getAverageAge(users)); // 55