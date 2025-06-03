let marvel_Heroes = ["ironman","thor","hulk"]
let dc_heroes = ["batman", "flash", "superman"]

//marvel_Heroes.push(dc_heroes)
// console.log(marvel_Heroes);

// const allHeroes = marvel_Heroes.concat(dc_heroes)
// console.log(allHeroes);

let all_new_heroes = [...marvel_Heroes, ...dc_heroes] 
// ... spread all the array individual items
console.log(all_new_heroes);

console.log(Array.from("Dhiraj"));


