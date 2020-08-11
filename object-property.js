const students = [
    {id: 21, name: 'omar sunny'},
    {id: 31, name: 'manna'},
    {id: 41, name: 'moyuri'},
    {id: 71, name: 'dipjol'}  
];

// const celeb = [];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i].name;
//     celeb.push(element);
// }

// console.log(celeb);

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);

console.log(biggerOne);
