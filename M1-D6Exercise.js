/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = "I'm a string"

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10+20
/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
console.log('----------ExC------------')
let random = Math.floor(Math.random()*21)
console.log(random)
/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
console.log('----------ExD------------')
let me = {name: 'Pavan', surname: 'Yalamanchi', age: '25'}
console.log(me)
/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
console.log('----------ExE------------')
delete me.age
console.log(me)
/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
console.log('----------ExF------------')
me.skills=['Java','Python']
console.log(me)
/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
console.log('----------ExG------------')
delete me.skills.pop()
console.log(me)
// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
console.log('----------Ex1------------')
function dice(){
    return Math.floor(Math.random() * 6) + 1;
}
console.log(dice())
/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
console.log('----------Ex2------------')
function whoIsBigger(a,b){
    if(a>b){
        console.log(`${a} is bigger`)
    }
    else{
        console.log(`${b} is bigger`)
    }
}
whoIsBigger(6,77)
/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
console.log('----------Ex3------------')
function splitMe(actualString){
    console.log(actualString.split(" "))
}
splitMe('I Love Coding')
/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
console.log('----------Ex4------------')
function deleteOne(stringToBeChanged,boolValue){
    if(boolValue===true){
        console.log(stringToBeChanged.substring(1))
    }
    else{
        console.log(stringToBeChanged.slice(0,-1))
    }
}
deleteOne("Hello World!",false)
deleteOne("Hello World!",true)
/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
console.log('----------Ex5------------')
function onlyLetters(letterString){
let replaceLetter=letterString.replace(/[0-9]/g, '')
console.log(replaceLetter)
}
onlyLetters("I have 4 dogs")
/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
console.log('----------Ex6------------')
function isThisAnEmail(emailString){
    if(emailString.includes('@') && emailString.charAt(0)!=='@' && emailString.includes('.')) {
        console.log('valid')
    }
    else{
        console.log('invalid')
    }
}
isThisAnEmail('pavan.y@gm.com')
isThisAnEmail('hdjsjah@.com')
isThisAnEmail('@123.c')
/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
console.log('----------Ex7------------')
function whatDayIsIt(){
    let currentDay = new Date()
    console.log(currentDay.getDay())
}
whatDayIsIt()

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
console.log('----------Ex8------------')
function rollTheDices(number){
    let i=0,sum=0
    let values=[]
    while(i<number){
        values.push(dice())
        i++
    }
    console.log(values)
    for(let j=0;j<values.length;j++){
        sum += values[j]
    }
    console.log(sum)
}
rollTheDices(5)
/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
console.log('----------Ex9------------')
function howManyDays(date1){
    let currDate = new Date()
    date2 = new Date(date1)
    let timeDiff =date2.getTime() - currDate.getTime();
    let dayDiff = Math.round(Math.abs(timeDiff/(1000 * 3600 * 24)))
    console.log(`Gap between the dates: ${dayDiff} days`)
}
howManyDays('2021-05-10')

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
console.log('----------Ex10------------')
function isTodayMyBirthday(date1){
    let birthday=new Date(date1)
    let currDate =new Date()
    if(birthday.getDate()===currDate.getDate()){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
isTodayMyBirthday('2021-05-24')
isTodayMyBirthday('2021-12-04')

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!
const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]
/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
console.log('----------Ex11------------')
function deleteProp(object1,str1){
    let object2={}
    Object.assign(object2,object1)
    delete object2[str1]
    console.log(object2)
}
deleteProp(movies[0],'Type')
/* Ex.12 
Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
console.log('----------Ex12------------')
function olderMovie(){
    let maxArray=[]
    for(let i=0;i<movies.length;i++){
        maxArray.push(Math.max(movies[i].Year))
    }
    //console.log(maxArray)
    let minYear = Math.min(...maxArray)
    //console.log(minYear)
    for(let j=0; j<movies.length;j++){
        if(movies[j].Year==minYear){
            console.log(movies[j])
        }
    }
}
olderMovie()
/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
console.log('----------Ex13------------')
function countMovies(){
    console.log(movies.length)
}
countMovies()
/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
console.log('----------Ex14------------')
function onlyTheTitles(){
    for(let i=0;i<movies.length;i++){
        console.log(movies[i].Title)
    }
}
onlyTheTitles()
/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
console.log('----------Ex15------------')
function onlyInThisMillennium(){
    for(let i=0;i<movies.length;i++){
        if(movies[i].Year>=2000){
            console.log(movies[i])
        }
    }
}
onlyInThisMillennium()
/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
console.log('----------Ex16------------')
function getMovieById(id){
    for(let i=0;i<movies.length;i++){
        if(movies[i].imdbID===id){
            console.log(movies[i])
        }
    }
}
getMovieById('tt2395427')
/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/
console.log('----------Ex17------------')
function sumAllTheYears(){
    let maxArray=[]
    for(let i=0;i<movies.length;i++){
        maxArray.push(Math.max(movies[i].Year))
    }
    //console.log(maxArray)
    let sum=0
    for(let j=0;j<maxArray.length;j++){
        sum += maxArray[j]
    }
    console.log(sum)
}
sumAllTheYears()
/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/
console.log('----------Ex18------------')
function searchByTitle(nameString){
    for(let i=0;i<movies.length;i++){
        if(movies[i].Title.includes(nameString)){
            console.log(movies[i])
        }
    }
}
searchByTitle('Avengers')
/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/
console.log('----------Ex19------------')
function searchAndDivide(searchString){
    let match=[]
    let unmatch=[]
    for(let i=0;i<movies.length;i++){
        if(movies[i].Title.includes(searchString)){
            match.push(movies[i].Title)
        }
        else{
            unmatch.push(movies[i].Title)
        }
    }
    console.log(`Matched Movies are: ${match}`)
    console.log(`UnMatched Movies are: ${unmatch}`)
}
searchAndDivide('Avengers')
/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/
console.log('----------Ex20------------')
function removeIndex(removeNumber){
    delete movies[removeNumber]
    console.log(movies)
}
removeIndex(movies.length-1)
// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/
//console.log('*'*3)
console.log('----------Ex21------------')
function halfTree(treeNumber){
    let i=0
    let tree=''
    for(let i=1;i<=treeNumber;i++){
        tree += '*'
        console.log(tree)
    }
}
halfTree(3)
//console.log('*')
/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/
console.log('----------Ex22------------')
function tree(number) {
    for ( let i = 0; i < number ; i++ ) {
        let tree = '*';
        let space = ' ';

        for ( let j = 1; j <= i; j++ ) {
            tree = tree + '**';            
        }
           
        let spacesBefore = space.repeat(number-i-1);
        tree = spacesBefore + tree;
        console.log(tree);
    }
}
tree(5)
/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/
console.log('----------Ex23------------')
function isItPrime(number){
    let count=0
    for(let i=0;i<=number;i++){
        if(number%i==0){
            count+=1
        }
    }
    if(count==2){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
isItPrime(4)
isItPrime(5)
/* This movies array is used throughout the exercises. Please don't change it :)  */