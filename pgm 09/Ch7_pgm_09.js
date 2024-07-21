var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");

console.log(message.substr(charIndex, 3));


const goIndex = message.indexOf('go');
console.log(goIndex);

const chooseIndex = message.indexOf('choose');
const chooseWord = message.substr(chooseIndex, 6);
console.log(chooseWord);

const ooIndex = message.lastIndexOf('oo');
console.log(ooIndex);