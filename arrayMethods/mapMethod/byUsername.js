//- Write a function which returns array of usernames.

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

function getUserNames(usersArray) {
    return usersArray.map(({ username }) => username) 
};

console.log(getUserNames(users)); // ['Yuri Gagarin', 'Nil Armstrong']