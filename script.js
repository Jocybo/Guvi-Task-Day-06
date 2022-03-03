alert("I'm invoked!"); // the whole String enclosed with quotation mark either it double or single both is not supported.


// The alert() method in JavaScript displays an alert box with a specified message :

alert("I'm invoked!");
alert("I'm JavaScript!");
alert('Hello') //end of the statement we need to write semicolon.
alert(`World`) //this is multiple line code and its working
alert(3 + 1 + 2); // addition the three values. and it's multiple line code.

//Fix the below to alert Guvi geek :

let admin = 9,
    fname = 10.5;
fname = "Guvi";
lname = "geek"
admin = fname + " " + lname;
alert(admin); // "Guvi geek"

//Fix the below to alert hello Guvi geek :

let fname = 10.5;
fname = "Guvi";
lname = "geek"
let out = fname + " " + lname;
alert(`hello ${out} `); //hello Guvi geek

//Fix the below to alert sum of two numbers :

let a = prompt("First number?");
let b = prompt("Second number?");
alert(Number(a) + Number(b)) //add 2 variable values


//If you run the below scritpt you will get “Code is Blasted”
//Explain Why the Code is blasted and how to diffuse it and get “Diffused”. 

var a6 = "2" == "12";
// //Don't touch below this :

if (a6) {
    console.log("Code is Blasted") //string value can't use <> comparison operator
} else {
    console.log("Diffused") //both are string value 
}



//How to get the correct score in console. :

let value22 = prompt('How many runs you scored in this ball');
if (value22 == 4) { //we give 4 we can get as "You hit a Four"
    console.log("You hit a Four");
} else if (value22 == 6) { //we give 6 we can get as "You hit a Six"
    console.log("You hit a Six");
} else {
    console.log("I couldn't figure out");
}


//Fix the code to welcome the boss :

// You cant change the value of the msg
let message1;
if (null || 2 || undefined) {
    message1 = "welcome boss";
} else {
    message1 = "Go away";
}
console.log(message1);


//Fix the code to welcome the boss :

let message2;
let lock1 = 0; //Error lock1=2

//Dont change any code below this 
if (null || lock1 || undefined) {
    message2 = "Go away";
} else {
    message2 = "welcome";
}
console.log(message2);


//Fix the code to welcome the boss :

let message3;
let lock2 = 0; //Error lock2=2
//Dont change any code below this :

if (lock2 && " " || undefined) {
    message3 = "Go away";
} else {
    message3 = "welcome";
}
console.log(message3);


//Change the code to print 3 2 1
//You can change only 2 characters :

let i = 4; //changed the value to 3 to 4
while (i > 1) { //gave condition 
    console.log(--i);
}


//Change the code to print even numbers :

for (let num6 = 2; num6 <= 20; num6 += 2) { // number changed to +=2
    console.log(num6)
}


//Change the code to print all the gifts :

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`); //we have to use backtick symbole
}

//Fix the code to disarm the bomb :

let countdown = 100;
while (countdown >= 0) {
    if (countdown == 100)
        console.log("disarmed the bomb")
    countdown--;
}
if (countdown == 0) {
    console.log("bomb triggered");
}

//Whats the msg printed and why?
var lemein = "0"; // both variables are string. 
var lemeout = 0;
var msg = "";
if (lemein) {
    msg += "hi";
}
if (lemeout) {
    msg += 'Hello';
}
console.log(msg);

//Whats the msg printed and why? Guess you answer before running it :

var lemein = "0"; //same as above program
var lemeout = 0;
var msg = "";
if (lemein) {
    msg += "hi";
}
if (lemeout) {
    msg += 'Hello';
}
console.log(msg);


// let login = 'Employee';

let login = 'Employee'
let message = (login == 'Employee') ? 'hello' :
    (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
console.log(message);