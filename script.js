var email;
var _name = "Mario";

_name = "Pero";

//Boolean
//Checks value only
console.log(5 == 6);
console.log(5 == 5);
console.log("5" == 5);
//Checks value and data type
console.log(5 === 5);
console.log(5 === "5");

//if statement

if(5 == 5) {
console.log("Five is equal to five");
}

if(5 == 6) {
    console.log("Five is equal to six");
}

//if else if

var today = "Monday";

if(today === "Friday") {
    console.log("Bingo. Today is Friday");
} else if(today === "Monday") {
    console.log("Yup. Today is Monday");
} else {
    console.log("Unknown day. Try again later");
};

var _str = "String";
if(_str !== "Test" || _str !== "Drug Test") {
    console.log("String is not equal to Test");
};

if(5 === 5 && 5 > 2) {
    console.log("I will run this code");
};

//Make a variable called height and store a number of your height
//Make a variable called limit and store a number of value: 1.40
//Make an if statement that checks whether your height is larger or smaller than limit height and output the following in the console:
//if higher or equal -> You are tall enough to ride the roller coaster.
//if smaller -> You are NOT tall enough to ride the roller coaster. Go home.

// var height = 184;
// var limit = 1.40;

// if(height >= limit) {
//     console.log("You are tall enough to ride the roller coaster.");
// } else(height < limit) {
//     console.log("You are NOT tall enough to ride the roller coaster. Go home.");
// };

//Make an Object called Hotel that holds three properties:
//Name: string, RoomNumber: number, HasVacancy: boolean.
//Output in the console (based on the HasVacancy property):
//Room number ROOM NUMBER is free in HOTEL NAME
//Room number ROOM NUMBER is NOT free in HOTEL NAME

var hotel = {
    name: "Budapest Hotel",
    roomNumber: 237,
    slobodnoLiE: false
};

if(hotel.slobodnoLiE) {
    console.log("Room number " + hotel.roomNumber + " is free in " + hotel.name);
} else {
    console.log("Room number " + hotel.roomNumber + " is NOT free in " + hotel.name);
};

//===================================================================================

//Switch

var _today = "Monday";

switch(_today) {
    case "Monday" :
        console.log("Today is Monday");
    break;
    case "Tuesday" :
        console.log("Today is Tuesday");
    break;
    default: console.log("Unknown day");    
};

var a = 10;
var b = 9;

if(a > b) {
    console.log("a is higher");
} else if(a < b) {
    console.log("b is higher");
} else {
    console.log("ednakvo e");
};

//Ucilisna skala na ocenki
var grade = 90;

if(grade < 20) {
    console.log(1);
} else if(grade <= 40 && grade >= 21) {
    console.log(2);
} else if(grade <= 60 && grade >= 41) {
    console.log(3);
} else if(grade <= 80 && grade >= 61) {
    console.log(4);
} else if(grade <= 100 && grade >= 81) {
    console.log(5);
};