//Zadanie 1
console.log('Zadanie 1');

let hello = "Hello";
let world = "world";

let greeting = `${hello} ${world} `;

console.log(greeting);




//Zadanie 2
console.log('Zadanie 2');

var firstFigure = prompt('Podaj a');
var secondFigure = prompt('Podaj b');


const multiply = (a = 1, b = 1) => a*b;

console.log(multiply(firstFigure,secondFigure));
console.log(multiply(4,8));
console.log(multiply(4));
console.log(multiply());



//Zadanie 3

console.log('Zadanie 3');

const average = (...args) => {let sum = 0; args.forEach(arg => sum += arg); return sum/args.length};


console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));


//Zadanie 4

console.log('Zadanie 4');

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const average2 = (...args) => {
	let sum = 0;  
	args.forEach(arg => sum += arg); 
	return sum/args.length;
};

const gradeAverage = average2(grades[0],grades[1],grades[2],grades[3],grades[4],grades[5],grades[6],grades[7],grades[8],);

console.log(gradeAverage);




//Zadanie 5 
console.log('Zadanie 5');

var data = [1, 4,'Iwona', false, 'Nowak'];

const [one, two, three, four, five] = data;

var firstName = three;

var lastName = five;

console.log(firstName);
console.log(lastName);


