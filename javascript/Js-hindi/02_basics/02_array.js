const marval_heros = ["thor", "ironman", "hulk"]
const dc_heros = ["superman", "batman", "flash"]
marval_heros.push(dc_heros)
console.log(marval_heros);

const all_new_heros = [...marval_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5],6,7,[5,7,[3,1],8]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Abhinav"));
console.log(Array.from("Abhinav"));
console.log(Array.from({name : "Abhinav"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
