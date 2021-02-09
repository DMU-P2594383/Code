/*Console can be used to see if JavaScript is working correctly within a browser. It will run and display the content ou have placed within it.
console.log ("working");
Variables contain data for the JavaScript file to comb through an run. They are the building block of most JavaScript code. Infomation is stored and then run through the browser.
Variables need 1. A Name and 2. Directions to do things. 'let' is used for a changing variable and 'const' is for an unchanging variable. Values are assigned by using =

E.g. let score = 5

Variables can be added for later use...

E.g. let score = 5 + 10*
let
*/

/*Types of data:
1. Maths variables like +, -, *, %

2. 'Strings' a sequence of characters e.g. let name = "Samual". These can be added togeher using +

3. 'Booleans' true or false sequence e.g. let cold = true;

4. 'Arrays' a list of items that are indicated by []. Each go in order from 0 onwards. e.g. let fruits = ["bananna", "strawberry", "apple"]. Arrays can be placed within other arrays i.e lists within lists.

5.  'Objects' something with a label and a value. Placed in curly brackets and are seperated by commas. Objects can also be placed within other objects. e.g. let = {firstName: "Samual", lastName: "Richardson"}
*/

/*Referencing html elements:
ID:
Use 'document' object to select the Id, class etc. NOTE: IT HAS TO BE WRITTEN IN CAMEL CASE, SMALL LETTER FOLLOWED BY CAPITAL LETTERS. e.g fileName.

They can be placed in a variable. E.g.

let thisDiv = getElementById("myElement");

It can perform tasks e.g. thisDiv.style.color ="red";

CLASS:
You can select a class of items within the html file by using the object 'document.'
E.g.let menuItems = document.getElementsByClassName("menuItem");

to change elements it is a bit more complicated. You need to make a loop that goes through items and updates them. E.g.

for (let i = 0; i < className.length; i++) {
className[i].style.color = "red";
}

CSS:
You can select things in a CSS file using document and 'querySelector'. Any CSS selector can be added in. E.g.
document.querySelector = ("myElement");
To select everything you use 'querySelectorAll'
These also have to be looped.
*/

/*Functions in JavaScript
They are another building block of script and groups togehter lines of code.
Two methods:
1. Traditional e.g.

function addThese(){
let total = 3 + 5;
}

moveThis()

2. Modern e.g.
adThese = () => {
let total =3 + 5;
}

PASSING DATA:
Storing data using variables for more complex functions. Then add the infomation in the 'call', the section added below. E.g.

addThese = (num1, num2) => {
let total = num1 + num2;
}

addThese(4, 8)
addThese(2, 4)
addThese(4, 6)

Anything inside these do not work with anything else but the function they are placed in.

RETURNING DATA:
Use the 'return' function in the script to make data return back. These are considered the 'final step.' E.g.

addThese = (num1, num2) => {
let total = num1 + num2;
return total;
}

Events:
Where it is
What it is
What should happen.

1. Context

let = button = document.getElementById("myElement");

2. Event Listener

let = button = document.getElementById("myElement");
button.addEventListener('click', handleClick)

handleClick = () => {
console.log("Button Clicked");
}

3. Recieve infomation
add to the function e.g.

handleClick = (evt) => {
console.log("Button Clicked");
}
*/

moveTrump = () => {console.log("trump")};
let trump = document.getElementById ("trump");
let x = Math.random() * (window.innerWidth - 100);
let y = Math.random() * (window.innerHeight - 100);
console.log('x: ${x} y: ${y}')
trump.style.transform = "translate(" + x + "px," + y + "px)";
setInterval(moveTrump, 500);
