//- Write a function which calculates average age of users.

function getAverageAge(usersGroup) {
    const sumOfAges = usersGroup.reduce((acc, {age}) => {
        return (acc + age);
    }, 0);
    return sumOfAges / usersGroup.length;
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