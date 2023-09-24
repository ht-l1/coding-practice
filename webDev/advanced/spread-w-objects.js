const feline = { leg: 4, family: 'Felidae'};
const canie = { family: 'Caninae', furry: true};

const dog = { ...canie, isPet: true};
// family: 'Caninae', furry: true,  isPet: true

const lion = { ...feline, genus: 'Panthera'};
// leg: 4, family: 'Felidae', genus: 'Panthera'

const catDog = { ...feline, ...canie};
// leg: 4, family: 'caninae',  furry: true
// they both have a family property, it has a conflict, order matters.. whatever comes last will win.

const dataFromForm = {
    email: 'hhel',
    password: 'xxx',
    username: 'xxx'
}

const newUser = { ...dataFromForm, id: 123, isAdmin: false }




