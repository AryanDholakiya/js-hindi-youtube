//kya prakare data ne memory ma rakhvama aave ane kai rite ene access kravama aave ena pr data na 2 types krvama aave 6 : 

//1. primitive &  2. Non-primitive

//Primitive : jetla primtive type 6 e badha call by value hoi chhe.

//7 types : (1)string (2)Number (3)Boolean (4)null (5)undefined (6)Symbol (7)BigInt

const score = 100;
const score2 = 10.2; //both are Number typed

const isLoggedIn = false;
const Temp = null;

let useEmail; //undefined.

//Example of 'Symbol'
const  id = Symbol('123')
const anotherID = Symbol('123')  //wheather we gave same symbol '123' but both are not same.

console.log(id == anotherID); //false

//bigint example : not so useful

const bigNumber = 83748473473974838n; //simply put 'n' at the end




//2. Non-primitive(reference) => Arrays, Objects, Functions

//Note: js is dynamically typed language , it means type cheking is done at the run time, we don't need to give a type to variable during compile time.

const heros = ["adsd","bdds","dadda"]  //array



let myObj = {    //object

    Fname: "abc",
    age: 20
}



const myFunc = function(){
    console.log("hello world!")
}


//how to define the type of any variable: it is using 'typeof' 

console.log(typeof bigNumber);  //bigint

console.log(typeof Temp) //object   : note

console.log(typeof myFunc) //function  //its called  object-function



//note : bdha non-premitive datatypes na types objects j kevay spcially function ne object-function kevay.