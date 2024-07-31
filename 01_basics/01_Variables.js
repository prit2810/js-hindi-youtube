const accountId = 121113;
let accountEmail =  "prit@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";

// accountId = 2 ;// Const will always be constat it wwon't reassign and redefine
// console.log(accountId);

accountEmail = "pritshah@gmail.com";
accountPassword = "98765";
accountCity = "Ahmedabad";

/*
prefer not to use var
b'coz there is an issue in block of scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity])