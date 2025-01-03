let score = 33

console.log(typeof score);
console.log(typeof (score)); //both syntax are valid



//Coversion

let score2 = "33"
console.log(typeof score2)

let conversion = Number(score2)

console.log("Becasue of Conversion of '33' it becomes: " + typeof conversion)



//NaN : when it gives NaN

let rollNo = "123abc" //string typed
let conversionforNaN = Number(rollNo)

console.log(typeof conversionforNaN) //here it gives o/p: Number but, actually it is NaN.

console.log(conversionforNaN); //NaN : is output because it tries for convert the rollNo into number.

//Any string can't changed into the number so, it will gives NaN


//trying conversion on null => it gives 0 
let cardNo = null;
console.log(typeof cardNo) //object

let conversionForNull = Number(cardNo)
console.log(conversionForNull)  //Coverts null into the : 0



//trying to change => it gives 1

let booleanVal = true

let boolConversion = Number(booleanVal)
console.log(boolConversion)  //1





//Note:

//"33" => 33
//"123abc" => NaN
//true => 1 , false => 0


let isLoggedIn = 1

let BoolisLoggedIn = Boolean(isLoggedIn)
console.log("what is we try to change the boolean value but it was given in 1 or 0 form not in true or false: " +BoolisLoggedIn) //true


console.log(typeof "abcd");
console.log("the typeof of null: " + typeof null); //object
console.log("typeof of undefined: " + typeof undefined); //undefined





let somenumber = 33

let newSomeNumber = String(somenumber)

console.log("typeof of somenumebr after String Conersion: " + typeof newSomeNumber)

