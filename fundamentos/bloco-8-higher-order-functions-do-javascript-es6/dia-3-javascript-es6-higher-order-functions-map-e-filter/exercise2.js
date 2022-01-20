const obj = [
    {
        age: 38,
        author: 'H. P. Lovecraft',
    },

    {
        age: 43,
        author: 'George R. R. Martin',
    },

    {
        age: 31,
        author: 'Isaac Asimov',
    },

    {
        age: 39,
        author: 'Stephen King',
    },

    {
        age: 62,
        author: 'J. R. R. Tolkien',
    },

    {
        age: 45,
        author: 'Frank Herbert',
    },
];

function nameAndAge(objeto) {
    const informationAge = objeto.map((infos) => infos);
    const ordened = informationAge.sort((a, b) => a.age - b.age);
    return ordened;
}

console.log(nameAndAge(obj));