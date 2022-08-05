// Code your solutions in this file
const writeCards = (array = ["Guadalupe", "Ollie", "Aki"]) => {
    const messageArray = [];
    for(const a of array) {
        messageArray.push(`Thank you, ${a}, for the wonderful surprise gift!`);
    }
    return messageArray;
}

const countDown = (num = 10) => {
    for(let number = num; number >= 0; number--){
        console.log(number);
    }
}