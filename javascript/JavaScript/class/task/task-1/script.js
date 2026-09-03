function analyzingString(str){
    let vowels = 0;
    let consonents = 0;
    let digits = 0;

    let vowelSet = "aeiouAEIOU";

    for (let ch of str) {
        if (vowelSet.includes(ch)) {
            vowels++;
        }
        else if (ch > "0" && ch <= "9"){
            digits++;
        }
        else if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")){
            consonents++
        }
    }
    return `This strings has ${vowels} vowels, ${consonents} consonents and ${digits} digits.`;
}

let results = analyzingString("Abhinav123");
console.log(results);
