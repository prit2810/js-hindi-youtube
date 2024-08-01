const marvel_heros =["Thor","Ironman","Spiderman"]
const dc_heros = ["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros)

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const anotherArray = [1,2,3,4,[5,6,7],7,[6,7,8,[2,3,5]]]
const real_another_Array = anotherArray.flat(Infinity)
// console.log(real_another_Array);

// console.log(Array.isArray("Prit"));
// console.log(Array.from("Prit"));
// console.log(Array.from({name:"Prit"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));