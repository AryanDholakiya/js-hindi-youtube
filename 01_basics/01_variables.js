const accountId = 212121
let accountEmail = "abc@gmail.com"
var accountPassword = "abc@123"
accountCity = "surat"

//accountId = 21112 //TypeError: Assignment to constant variable.

console.log("account Id: ",accountId)

accountEmail = "cba@gmail.com"
accountPassword = "321abc"
accountCity = "Ahemdabad"  //variable can be also declared like this...but this is not a good way.

let accountState; //we are not intializing any value here still we print it ...let see the value of it
//it's undefined

// note 
console.table([accountEmail,accountPassword,accountCity,accountState]);


/*
why we should not use the 'var' keyword.
--> it's because of the issue in the block scope and functional scope.
--> we always have to use the 'let'.
*/