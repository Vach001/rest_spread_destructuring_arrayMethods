//- Write a function which filters object by field.

function filterByField(usersArray, key) {

    return usersArray.filter((user) => user[key])

};

const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        isAstronaut: true,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        isAstronaut: true,
    },
    {
        username: "Elon Musk",
        isAstronaut: false,
    },
];

console.log(filterByField(users, "isAstronaut")); 
 /* [{ username: "Yuri Gagarin", lang: "ru", isAstronaut: true, },
     { username: "Nil Armstrong, lang: "ENG", isAstronaut: true, }] */
