/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

console.log('------------Ex-1------------')

function area(l1,l2){
    let rectArea = l1 * l2;
    console.log(rectArea)
}
area(4,6)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
console.log('------------Ex-2------------')
function crazySum(x1,x2){
    if(x1===x2){
        console.log((x1+x2)*3)
    }
    else{
        console.log(x1+x2)
    }
}
crazySum(5,6)
crazySum(6,6)

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/console.log('------------Ex-3------------')
function crazyDiff(x){
    if(x>19){
        console.log(3*(x-19))
    }
    else{
        console.log(Math.abs(x-19))
    }
}
crazyDiff(16)
crazyDiff(22)

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
console.log('------------Ex-4------------')
function boundary(n){
    if((n>=20 && n<=100)||(n==400)){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
boundary(199)
boundary(400)
boundary(200)
boundary(999)
/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
console.log('------------Ex-5------------')
function strivify(S){
    //let newString = S.slice(0,5)
    //console.log(newString)
    if(S.slice(0,6)=='Strive'){
        console.log(S)
    }
    else{
        console.log('Strive '+S)
    }
}
strivify('Strive School')
strivify('School')

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
console.log('------------Ex-6------------')
function check3and7(number){
    if(number<=0){
        console.log('please provide positive integer')
    }
    else if((number%3==0)||(number%7==0)){
        console.log('Given number is a multiple of 3 or 7')
    }
    else{
        console.log('Given number is not a multiple of 3 or 7')
    }
}

check3and7(-8)
check3and7(99)
check3and7(63)
check3and7(52)

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
console.log('------------Ex-7------------')
function reverseString(String){
    let revString = '' 
    let length = String.length
    //console.log(String.substring(String.length-1,String.length))
    for(let i=0; i< length;i++){
        revString += String.substring(String.length-1,String.length)
        String = String.substring(0,String.length-1)
    }
    console.log(revString)
}
reverseString('pavan')
reverseString('Strive')

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
console.log('------------Ex-8------------')
function upperFirst(lowerString){
    //console.log(lowerString[3+1].toUpperCase())
    let newString=[]
    Object.assign(newString,lowerString)
    newString[0]=newString[0].toUpperCase()
    for(let i=0;i<lowerString.length;i++){
        //console.log(lowerString[i])
        if(newString[i]==' '){
            newString[i+1] = newString[i+1].toUpperCase()
        }
    }
    let outString = newString.join('')
    console.log(outString)
}
upperFirst('hi hello how are you doing')
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
console.log('------------Ex-9------------')
function cutString(s){
    s=s.substring(1,s.length-1)
    console.log(s)
}
cutString('hello')
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
console.log('------------Ex-10------------')
function giveMeRandom(n){
    for(let i=0;i<n;i++){
        console.log(Math.floor(Math.random()*11))
    }
}
giveMeRandom(10)
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/