// Additional assignments for Day 3

/*
 1. Use ternary operator to assign "male" or "female" string to a variable based on the value of another 'isMale' variable
*/

let isMale = true
let variable = isMale ? 'Male':'Female'
console.log(variable)

/*
 2. Write code to check from two given integers whether one of them is 8 or their sum or difference is 8.
*/

let a=3,b=6
if((a==8)||(b==8)){
    console.log("one of the numbers is 8")
}
else if(((a+b)==8)||((a-b)==8)){
    console.log("Sum or diff is 8")
}
else{
    console.log("Didn't match any conditions")
}

/*
  3. Create a variable which concatenates two strings.
*/

let concat = 'hello'+'world'
console.log(concat)

/*
4.Write a JavaScript conditional statement to sort three numbers. Display the result in the console.
*/

let x=5,y=7,z=4

if((x>y)&&(x>z)){
    if(y>z){
        console.log(x,y,z)
    }
    else{
        console.log(x,z,y)
    }
}
else if((y>x)&&(y>z)){
    if(x>z){
        console.log(y,x,z)
    }
    else{
        console.log(y,z,x)
    }
}
else if((z>x)&&(z>y)){
    if(x>y){
        console.log(z,x,y)
        }
    else{
        console.log(z,y,x)
        }
}

/*
 5. Write code to find the average of two given integers.
*/

let integer1=6,integer2=9
average=(integer1+integer2)/2
console.log(average)

/* 
  6. Find the longest of two given strings
*/

let str1='pavan',str2='yalamanchi'
if(str1.length>str2.length){
    console.log("str1 is longest")
}
else{
    console.log("str2 is longest")
}

/*
 7. Write code to check whether a value is an integer or not.
*/

let val1=6,val2='hello'
console.log(typeof val1,typeof val2)

/*
 8. Write code to calculate the percentage (%) of a number.
        Ex.: 20% of 400 is 80
*/

let number=87
let percentage=40
percent=(number*percentage)/100
console.log(percent)

/*
 9. Write code to check if a given number is even or odd.
*/

let num=94
if(num%2==0){
    console.log("number is even")
}
else{
    console.log("number is odd")
}