/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/*
NUMBER: Any value from 2^53-1 till 2^53+1 will be taken under this data type, i.e if we declare a variable 
with value lying between these numbers it will be considered as number or integer data type.

STRING: Any text declared to a variable can be of string data type. it can be declared between any one of these symbols: " or ' but 
these symbols should match.

BOOLEAN: This data type has only two outputs to show, i.e whether a condition or value that is provided is true or false.

UNDEFINED: If we declare a variable and doesn't assign a value for it then the console is going to tell us that the variable is undefined.

NULL: If a variable is declared as null it means that the variable is empty and it contains absolutely nothing, i.e empty variable.

BIGINT: This is used when the integer limit is out of range for number.
*/

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/

/* 
A variable is a container in which we can store any type of data. which inturn can be used/called using the variable.
 */

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

console.log(12+20)

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

let x=12

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

let name = 'John Doe'

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

console.log(12-x)

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

let name1='john',name2='John'
console.log(name1===name2)
console.log(name1===name2.toLowerCase())


/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

let number=8
if(number==1){
    console.log("one")
}
else if(number==2){
    console.log("two")
}
else if(number==3){
    console.log("three")
}
else if(number==4){
    console.log("four")
}
else if(number==5){
    console.log("five")
}
else if(number==6){
    console.log("six")
}
else if(number==7){
    console.log("seven")
}
else if(number==8){
    console.log("eight")
}
else{
    console.log("nine")
}

/* EXERCISE 9
[Extra] Insert a value in a variable based on the result of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

let value= 40<42 ? 'aaa':'aab'
console.log(value)

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/