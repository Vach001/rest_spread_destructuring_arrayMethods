//- Write a function which remove users with language equals to 'ru'.

function filterUsers(usersGrup) {

    return usersGrup.filter((user) => user.lang !== 'ru');
};

const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
    },
];

console.log(filterUsers(users)); // [{ username: "Nil Armstrong, lang: "ENG" }]