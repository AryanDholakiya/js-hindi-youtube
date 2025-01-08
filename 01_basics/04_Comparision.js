console.log("2" > 1) //true 
console.log(1 < "2") //true

console.log(null > 0)  //false
console.log(null == 0) //false
console.log(null >= 0) // true 

console.log();
//the reason is that an equality check == and comparision > < >= <= work differently.
//Comparision convert null to a number treating it as 0.
//that's why (3) null >= 0 is true and (1) null > 0 is false.


// = assign the value 
// == compare the value

//Note : === (strict check) : khali values ne j nahi pn sathe ena datatypes ne pn check kre 6.

console.log("2" == 2) //true   //because conversion is done .
console.log("2" === 2) //false : because it also checks the data type also.


