// Question 1 .............................................
console.log("Question 1 ..............");

for (let i = 0; i <=100; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
        console.log("fizz");
        
    } else if (i % 5 == 0 && i % 3 != 0) {
        console.log("buzz");
        
    } else if (i %3 ==0 && i %5 ==0) {
        console.log("fizzbuzz");
        
    } else {
        console.log(i);
    }
    
}

// Question 2 ............................................
console.log("Question 2 ....................");

const student = {
    name: "Hulsinki",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}
console.log(student.name);
console.log(student.age);
console.log(student.projects.diceGame);

// Question 3 ..............................................
console.log("Question 3 ....................");

var shoppingLIst = ["Bread", "milk", "butter", "tomato sauce"];
console.log(shoppingLIst);

var shoppingBasket = shoppingLIst;
shoppingBasket.push("apple", "banana");
console.log(shoppingBasket);

//Question 4 .................................................
console.log("Question 4 ...................");

console.log("Calculataor");
console.log("1. Addtion");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
console.log("5. Square root");
console.log("6. Percentage");
let calculator = prompt("Select operation",0);

if (calculator == 1) {
    let x = prompt(" Enter 1st number",0);
    let y = prompt(" Enter 2nd number",0);        
    z = +x + +y; 
    console.log(`Addition of ${x} and ${y} is ${z}`);  
}
else if (calculator == 2) {
    let x = prompt(" Enter 1st number",0);
    let y = prompt(" Enter 2nd number",0);        
    z = +x - +y; 
    console.log(`Substraction of ${x} and ${y} is ${z}`);  
}
else if (calculator == 3) {
    let x = prompt(" Enter 1st number",0);
    let y = prompt(" Enter 2nd number",0);        
    z = +x * +y; 
    console.log(`Multiplication of ${x} and ${y} is ${z}`);  
}
else if (calculator == 4) {
    let x = prompt(" Enter 1st number",0);
    let y = prompt(" Enter 2nd number",0);        
    z = +x / +y; 
    console.log(`Division of ${x} and ${y} is ${z}`);  
}
else if (calculator == 5) {
    let x = prompt(" Enter number",0);
    z = Math.sqrt(x); 
    console.log(`Square root of ${x} is ${z}`);  
}
else if (calculator == 6) {
    let x = prompt(" Enter obtained value",0);      
    let y = prompt(" Enter total value",0);  
    z = (x * 100)/ y; 
    console.log(`Percentage of ${x} from ${y} is ${z}`);  
}
else{
    console.log("Invalid selection");
}

// Question 5 .....................................................
console.log("Question 5 ......................");
console.log("Sales done by employee");

let sale = prompt("Enter sale done by employee",'0');
if (sale >=0 && sale <=5000) {
    comm = sale * 2;
    console.log(`Sale done by employee is ${sale} and commision earned by him is ${comm}`);    
}
else if (sale >5000 && sale <=10000) {
    comm = sale * 5;
    console.log(`Sale done by employee is ${sale} and commision earned by him is ${comm}`);    
}
else if (sale >10000 && sale <=20000) {
    comm = sale * 7;
    console.log(`Sale done by employee is ${sale} and commision earned by him is ${comm}`);    
}
else{
    comm = sale * 10;
    console.log(`Sale done by employee is ${sale} and commision earned by him is ${comm}`);    
}

// Question 6 .....................................................
console.log("Question 6 ......................");

let num;
do{
    num = prompt("Enter a number greater than 100", 0);
} while (num <=100 && num);
console.log(`Number entered is ${num} `);

// Question 7 .....................................................
console.log("Question 7 ......................");

let n = prompt("Enter value of n to get prime numbers",0);
nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}

// Question 8 .....................................................
console.log("Question 8 ......................");

function ask(question, yes, no){
    if(confirm(question))yes()
    else no();
}
ask(
    "Do you agree ?",
    ()=> alert("You agreed."),
    ()=> alert("You cancelled the executiton")
);