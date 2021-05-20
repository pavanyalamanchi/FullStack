/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript (uncommented)
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/

let positiveNumbers = [1,2,3,4,5]

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let Person = {
    name : 'Pavan',
    surname : 'Yalamanchi',
    email : 'py@email.com',
    age : '25'
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

Person.drivingLicense = false

/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete Person.age

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

let secondPerson = {
    name:'Gordon',
    surname:'Freeman',
    email:'GF@email.com'
}

console.log(Person.email===secondPerson.email)

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 40, shipping = 10, totalCost

if(totalShoppingCart>50){
    totalCost=totalShoppingCart
}
else{
    totalCost=totalShoppingCart+shipping
}
console.log(totalCost)
/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let blackFridayOffer=totalCost*0.2
console.log(totalCost-blackFridayOffer)

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

let Car = {
    brand : 'Chevrolet',
    model : 'Cruze',
    licensePlate : 'lx00123'
}
let Car1={},Car2={},Car3={},Car4={},Car5={}

Object.assign(Car1,Car)
Object.assign(Car2,Car)
Object.assign(Car3,Car)
Object.assign(Car4,Car)
Object.assign(Car5,Car)

Car1.licensePlate = 'ax00123'
Car2.licensePlate = 'bx00123'
Car3.licensePlate = 'cx00123'
Car4.licensePlate = 'dx00123'
Car5.licensePlate = 'ex00123'

console.log(Car,Car1,Car2,Car3,Car4,Car5)

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent =[
    Car,Car1,Car2,Car3,Car4,Car5
]
console.log(carsForRent)
/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.splice(0, 1)
carsForRent.pop()
console.log(carsForRent)

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

console.log(typeof Car,typeof Car.licensePlate,typeof Car.brand)


for(let i=0;i<(carsForRent.length);i++){
    console.log(carsForRent[i])
    console.log(carsForRent[i].brand)
    console.log(carsForRent[i].licensePlate)
}

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

let carsForSale = [Car9 = {
    brand : 'Audi',
    model : 1,
},Car9 = {
    brand : 'BMW',
    model : 9,
},Car9 = {
    brand : 'Chevrolet',
    model : 8
}]
let totalCars = carsForSale.length+carsForRent.length
console.log(totalCars)

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

for(let i=0;i <= (carsForSale.length-1);i++){
    console.log(carsForSale[i])
}


/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/