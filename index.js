/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/ console.log( "\n-------------------Exercise 1----------")
const arrayOfNumbers= ["1","2","3","4","5"];
console.log(arrayOfNumbers);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/
console.log('\n----------Exercise 2----------');
const myDetails= {
    Name: "ManojKumar",
    surName: "Bhoosani",
    email: "Bhoosanimanoj@gmail.com",
    age:28
};
console.log("my details are here:", myDetails);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
console.log("\n--------------- Exrcise 3---------");
myDetails.age = 28;
const addingproperty = myDetails.age >= 18 ? "hasDrivingLicense" : "notHaveDrivingLicense";
console.log('Addding the new property:', addingproperty);

myDetails[addingproperty]= true;
console.log(myDetails);



// myDetails.hasDirivinglicense =  true;
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 4
 Remove from the previously created object the age property.
*/console.log ("\n-----------Exercise 4----------");
delete myDetails.age;
console.log(myDetails);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

console.log('/n------------ Exercise5----------')

const anotherDetails= {
    Name: "Michele",
    surName: "walter",
    email: "Michelewalter@gmail.com",
};
console.log("my details are here:", anotherDetails);

console.log (myDetails !== anotherDetails );



/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
console.log ('\n--------------Exercise 6 ------------------')


// const shopingCart = 30;
// const shippingnCost= 10;
// const total = shopingCart + shippingnCost;

let shoppingCart= 40;
let shipingCost= 10;
console.log(shoppingCart);
const totalShoppingCart = shoppingCart>= 50? "shoppingCart" : "(shoppingCart+shipingCost)";
console.log(totalShoppingCart);

/* WRITE YOUR ANSWER HERE */


/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
console.log ('/n--------exercsie7---------')
const discount = 0.8 *shoppingCart; 
// const discount = (shoppingCart*100)/20;
console.log( 'shopping cost on Black firday:', discount );


/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n------------Exercise8------')
const car1 ={
    brand: "BMW",
    model: "Sport",
    licensePlate: 123456
}
console.log( "car1:",car1);

const car2=  Object.assign({},car1)
car2.licensePlate = 654321
console.log("car2:",car2)

const car3=  Object.assign({},car2)
car2.licensePlate = 132465
console.log("car3:",car3)

const car4=  Object.assign({},car3)
car2.licensePlate = 635241
console.log("car4:",car4)
const car5=  Object.assign({},car4)
car2.licensePlate = 415263
console.log("car5:",car5)
/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/
console.log('\n---------exercise9---------')
const carsForRent =["car1", "car2", "car3", "car4","car5",];
console.log (carsForRent);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
console.log("\n------------Exercise10---------")

const removeFirstCar = carsForRent.shift();
console.log( removeFirstCar);

const removeLastCar = carsForRent.pop();
console.log( removeLastCar);
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
console.log("\n------------- Exercise11-------------")

console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
console.log(car5);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/
console.log( "\n----------Exercise12-------------")
const carsForSale=[];
carsForSale.push(car1,car2,car3)
console.log(carsForSale);

const totalCars= carsForRent.concat(carsForSale);
console.log(totalCars);
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/
console.log("/n------------exercise13----------")

for (let i=0; i< carsForSale.length; i++);

console.log(carsForSale);
/* WRITE YOUR ANSWER HERE */

