let username = "Alex Zaks" ;
let age = 35;
let birthday = "December 10";
let pineapplePizza = true;
let lifeEvents = [
    "I was born in Riga, Latvia.", 
    "I went to Grand Circus Bootcamp.",
    "I can speak Russian",
    "I enjoy cooking."
];

if (pineapplePizza) {
    console.log (`My name is ${username} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`);
} else if (pineapplePizza = false)
console.log (`My name is ${username} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`);

for (let i = 0 ; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
let randomNumber = Math.floor(Math.random() * 10) + 1;
if (randomNumber !== 5) {
    counter++;
    console.log(` ${randomNumber} !==5 `);

} else {
    counter++;
    console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
    break;
}
}







