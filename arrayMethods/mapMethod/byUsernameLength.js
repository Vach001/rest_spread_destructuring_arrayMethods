//-Write a function which returns array of lengths of user names

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

function getUsernameLengths(usersArray) {
    return usersArray.map(({username}) => username.length);
};

console.log(getUsernameLengths(users)); // [12, 13]