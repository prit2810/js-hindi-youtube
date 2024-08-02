// Immediately Invoked Function Expression(IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()
//this is common thing but when we will include iife then the syntax is change

// (function chai() {  
//   console.log(`DB CONNECTED`);
// })();
//this is called as name iife when we gave function name then it will call name iife
/* This pattern is called iife this will use for the 
Avoid polluting the global namespace
Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.*/

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Prit") 
/*we have to treat this as a function all the things are same like we do in the function like passing parameter,arguments and all.This is called as iife when we don't gave function name then it will call iife */

