const quotes = ["Great things never come from comfort zones",
                "Dream bigger, do bigger",
                "Don't stop when you're tired, stop when you're done",
                "The more you do today, the closer you'll be to your goals",
                "It's going to be hard, but hard does not mean impossible"]


let randomNum = Math.floor(Math.random() * 6);

if (randomNum === 1) {
    console.log("Great things never come from comfort zones");
}   else if (randomNum === 2) {
    console.log("Dream bigger, do bigger");
}   else if (randomNum === 3) {
    console.log("Don't stop when you're tired, stop when you're done");
}   else if (randomNum === 4) {
    console.log("The more you do today, the closer you'll be to your goals");
}   else if (randomNum === 5) {
    console.log("It's going to be hard, but hard does not mean impossible");
}   else {
    console.log("Please enter a valid number");
}