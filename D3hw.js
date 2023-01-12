/* EXERCISE 1
 Write a piece of code to find the largest of  given two integers
*/

if (10 > 2){
console.log("ten is largest");
}

/* EXERCISE 2
  Write a piece of code to check: if  given an integer is NOT equal to 5 then display " not equal"
*/

if (2 === 5){
    console.log("equal");
}else{
    console.log("not equal");
}


/* EXERCISE 2
  Write a piece of code to check: if  given an integer is  divisible  by  5 then display "divisible by 5" (search for modulo operator)
*/

if( 18 % 5){
    console.log("divisible by 5");
}


/* EXERCISE 3
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

const a1 = 10;
const b1 = 2;

if(a1 === 8, b1===8){
    console.log("the value is eight");
} else if(a1-b1===8){
    console.log("subtraction is equal to eight");
} else if(a1+b1===8){
    console.log("addition is equal to eight");
} else {
    console.log("not equal to eight")
}

/* EXERCISE 4
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

 let totalShoppingCart = 120;

if(totalShoppingCart > 50)
{
  console.log("free shipping!");

} 
else {
  console.log((totalShoppingCart + 10).toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP"
}));
}


/* EXERCISE 5
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let discount = 20;
let blackFriday = (discount / 100) * totalShoppingCart;
let totalCost = totalShoppingCart - blackFriday;


if( totalCost > 50)
{
  console.log("free shipping!");

} 
else {
  console.log((totalCost + 10).toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP"
}));
}


/* EXERCISE 6
Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

const a=2, b=100, c= 32;

if (a > b && a > c){
  if(b > c){
    console.log(a + ',' + b + ','+ c);
  } else {
    console.log(a + ',' + c + ',' + b);
  }
} else if(b > a && b > c){
  if(a > c){
    console.log(b +',' + a +',' + c);
  } else{
    console.log(b +',' + c +',' + a);
  }
} else if(c > a && c > b){
  if(a>b){
    console.log(c +',' + a +',' + b);
  }
}else{
  console.log(c +',' + b +',' + a);
}


/* EXERCISE 7
Write a piece of code for checking if a given value is a integer or not. (search for 'typeof')
*/

let number1 = 50;

if(typeof number1=== "number"){
  console.log("interger");
} else {
  console.log("not an integer");
}

/* EXERCISE 8
 Write a piece of code for checking if a given number is even or odd. (search for modulo operator)
*/

let number2 = 111

if(number2 % 2===0){
  console.log("number is even");
} else {
  console.log("number is odd");
}

/* EXERCISE 9
Change the order of logic in the code so that it will return the correct statements in all cases.*/

/*let val = 7
if (val < 10) {
    console.log("Less than 10");
  } else if (val < 5) {
     console.log("Less than 5");
  } else {
    console.log("Greater than or equal to 10");
  }*/

 let val = 7;
if (val  < 5) {
    console.log("Less than 5");
  } else if (val < 10) {
     console.log("Less than 10");
  } else {
    console.log("Greater than or equal to 10");
  }



/*
EXERCISE 10
Write chained if/else if statements to fulfill the following conditions:
num < 5 - display Tiny
num < 10 - display Small
num < 15 - display Medium
num < 20 - display Large
num >= 20 - display Huge
*/

let num = 17

if (num < 5){
  console.log("Tiny");
}
else if (num < 10){
  console.log( "Small");
}
else if (num < 15){
  console.log("Medium");
}
else if(num < 20){
  console.log("Large");
}
else if (num >= 20){
  console.log(Huge);
}


/*  EXERCISE 11
Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale= true

console.log(isMale ? "male" : "female");

/* EXERCISE 12
Display the numbers 0 through 5 (inclusive) in acesnding order using a while loop.
*/

let number = 0

while(number <=5){
  console.log(number);
  number = number + 1;
}

/* EXERCISE 13
Display the numbers 0 through 10 (inclusive) in acesnding order using a for loop.
*/

/*for (let T=0; T<=10; T++){
  console.log(T);
}

/* EXERCISE 14
Display the numbers 0 through 10 (inclusive) in acesnding order  but skip displaying 3 and 8.
*/
for (let T=0; T<=10; T++){
  if(T== 3) continue;
  if(T== 8) continue;
  console.log(T);
}

/* EXERCISE 15
 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen
*/
for (let T=0; T<=15; T++){
  if(T % 2 === 0) {
    console.log("even");
  }
  if(T % 2 === 1){
    console.log("odd");
  } 
  console.log(T);
}


/* EXERCISE 16
  Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz
 */

  
  for (let T=0; T<=100; T++){
    if(T % 3=== 0 && T % 5 ===0)  
    {
      console.log("FizzBuzz");
    }
   else if (T % 3===0){
      console.log("Fizz");
    } 
    else if (T % 5===0) {
      console.log("Buzz");
    }
    else {
      console.log(T);
    }
    }

/* EXERCISE 17
  Write a piece of code to check the day of the week .  Usie  SWITCH - CASE  and given "day" variable with range from 1 to 7. 
  For example: if day value is equal to 1 display "Monday", if day value is equal to 3 display "Wednesday"*/

  let day = 4
 switch (day){
    case 1:
    day = console.log("Monday");
    break;
    case 2:
    day = console.log("Tuesday");
    break;
    case 3:
    day = console.log("Wednesday");
    break;
    case 4:
    day = console.log("Thursday");
    break;
    case 5:
    day = console.log("Friday");
    break;
    case 6:
    day = console.log("Saturday");
    break;
    case 7:
    day = console.log("Sunday");
    break;
    default:
      console.log("Enter a number from 1-7");
 }