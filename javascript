//1
alert("Hey world!");
console.log("Hello world!"); // English
console.log("Hej vänner!"); // Swedish
console.log("Hola, mundo!"); // Spanish!
//2
console.log("I/'m awesome");
var x;
console.log("the value of x will be: Undifiend");
console.log(x);
x= 50;

console.log("the value of my variable x will be: 50");
console.log(x);

var y="Hasgang";
console.log("the value of x will be: Hasgang");
console.log(y);
y= "t2bor 2lbi";

console.log("the value of my variable x will be: t2bor 2lbi");
console.log(y);

var z = 7.25;
console.log(z);
var a = Math.round(7.25);
console.log(a);
var max = Math.max(z,a);
console.log("the highest value of the two values is "+max);
//6
var animals= [];
console.log("the value of the array will be :[]");
animals=["dog","cat","tiger","lion","bear","snake"];
 console.log(animals);
 animals.push('baby pig');
 console.log(animals);


 let myString = "this is a test";
 console.log(myString);
 console.log(myString.length);





 function compareType(a,b) {

    if (typeof a == typeof b)
        {   
    console.log(a, b, " are the same type");
        }
    else {
        console.log(a, b," are not the same type");
        }   
    }

let var1 = "t2bor 2lbi";
let var2 = 50;
let var3 = ["Volvo","BMW","Saab","Ford","Fiat","Audi"];
let var4 = false;
let var5 = 500;

compareType(var1,var2);
compareType(var1,var3);
compareType(var4,var1);
compareType(var2,var3);
compareType(var2,var4);
compareType(var5,var2);


let foo = 3;
console.log("The value of my variable foo is: 3 " + foo);
console.log("The Type of my variable is 3"+ typeof (foo));


let x = 9;
let y = 'Hello';

if (type of x== type of y)
{   
    console.log(x, y, " are the same type");
        }


let x = 7;
  console.log("The value of x is "+ x);   

x= x % 3;
console.log(" valueX % valueY , want divide valueX by valueY and return the reminder of the division");
console.log("When i do (7 % 3), it's returned value is"+ e);

var films = ["Jurassic Park", "Titanic", "Toy Story"];

console.log(films[0]); // will be "Jurassic Park"
console.log(films[1]); // will be "Titanic"
console.log(films[2]); // will be "Toy Story"

var maxNumber = Math.pow(10, 1000); // max positive number

if (maxNumber === Infinity) {
  console.log("Let's call it Infinity!");
  // expected output: "Let's call it Infinity!"
}

console.log(1 / maxNumber);
// expected output: 0

console.log("Infinities cannot be compared but we can see always 2 different values"); 
