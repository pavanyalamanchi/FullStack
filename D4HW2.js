/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

let array1 = [1,3,5]
let array2 = []
let i=0
while(i<(array1.length)){
    array2.push(array1.pop())
}
console.log(array2)
/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

let temp=array2[0]
for(let j=1;j<(array2.length);j++){
    if(array2[j]>temp){
        temp=array2[j]
        //console.log(temp)
    }
}
console.log(temp)
/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

let temp1=array2[0]

for(let j=1;j<(array2.length);j++){
    if(array2[j]<temp){
        temp1=array2[j]
        //console.log(temp1)
    }
}
console.log(temp1)
/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

let newArray=['hello',1,2,'world',3,'hey']
for(let k=0;k<newArray.length;k++){
    if(typeof newArray[k] == 'number'){
        console.log(newArray[k])
    }
}
/* EXERCISE 5
Write the code to delete even entries from an array.
*/

let evenArray =[1,2,4,5,6,8,9,7]
for(let l=0;l<evenArray.length;l++){
    if(evenArray[l]%2==0){
        evenArray.splice(l,1)
    }
}
console.log(evenArray)
/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

let remVowels = 'hello world!'
let character=[]
Object.assign(character,remVowels)
//console.log(character)
for(let m=0;m<remVowels.length;m++){
    if (character[m] == 'a' || character[m] == 'e' || character[m] == 'i' || character[m] == 'o' || character[m] == 'u'){
        character.splice(m,1)
    }
}
//console.log(character)
console.log(`${character[0]}${character[1]}${character[2]}${character[3]}${character[4]}${character[5]}${character[6]}${character[7]}${character[8]}`)
/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

let numArray =[1,2,3,4,5]
for(let n=0;n<numArray.length;n++){
    numArray[n] += 1
}
console.log(numArray)
/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let lenString=["strive", "is", "great"]
let newString=[]
for(let p=0;p<lenString.length;p++){
    newString[p]=lenString[p].length
}
console.log(newString)
/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/