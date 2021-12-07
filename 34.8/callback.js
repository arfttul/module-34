function greet(name, greetHandler) {
    greetHandler(name);
}
function greetEvening(name) {
    console.log(name, 'good Evening!');
}
function greetMorning(name) {
    console.log(name, 'good Morning!');
}
function greetNight(name) {
    console.log(name, 'good Night!');
}


const name = 'jarif';
const name1 = 'mahdi';
const name2 = 'efty';
greet(name, greetEvening);
greet(name1, greetMorning);
greet(name2, greetNight);