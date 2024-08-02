const user = {
    username : "Prit",
    price : 999,

    welcomMessage:function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this); 
        /*when we print this line it will give current context means it will give current value means here the starting point of scope is current context so whatever value we want to get the value then we have to give this.value we can't directly write ${username} instead of this we have to give ${this.username} it will referred to a current context.*/
    }
}

user.welcomMessage();
user.username = "Sam";
user.welcomMessage();

// console.log(this); 
/*when we print this outside the scope then current context for this log is {} empty and interestingly current context of node is always empty if there in nothing in global context and browser current context is window*/


function chai(){
    // console.log(this);
    /* In above welcomeMessage we gave log and in that we gave this then it will gave us a value of the user which where define in the scope but now here is an empty scope there is no values define so it will give so many values like
    
    <ref *1> Object [global] {
    global: [Circular *1],
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    structuredClone: [Function: structuredClone],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    atob: [Function: atob],
    btoa: [Function: btoa],
    performance: Performance {
        nodeTiming: PerformanceNodeTiming {
        name: 'node',
        entryType: 'node',
        startTime: 0,
        duration: 30.853314999490976,
        nodeStart: 1.9418959990143776,
        v8Start: 4.306026000529528,
        bootstrapComplete: 22.88018999993801,
        environment: 11.510917998850346,
        loopStart: -1,
        loopExit: -1,
        idleTime: 0
        },
        timeOrigin: 1722582760483.561
    },
    fetch: [AsyncFunction: fetch]
    }
    
    One more interesting thing is that if we write 
    function chai(){
        let username = "Prit"
        console.log(this.username)
    }

    then it will be undefined because this will work in objects not in the functions but when there is no values in the function and you make function and just do a log and give this then it will give above values of globally scope
    */
}

chai()

// const chai2 = function(){
//     let username = "Prit"
//     console.log(this.username)
//     /* here also same issue like chai it will also not working it will also give undefined */
// }

// chai2()

// const chai2 =() => {
//     let username = "Prit"
//     console.log(this)
//     /* so here when we give console.log(this) then it will give you {} empty it will not give undefined this is the difference between normal function and arrow function*/
// }
// chai2()


// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));


// const addTwo = (num1,num2) => (num1 + num2)
// // this is an implicit return that means node will assumes that you don't have to write return b'coz its single line statement

// console.log(addTwo(3,4));

// so when we use in {} we have to give return statement but when we use in () we don't want to give return statment 

// const name = () => {username:"Prit"}
// console.log(name()); //it will give undefined b'coz we cannot return object like this so we have to give parenthesis()

const name = () => ({username:"Prit"})
console.log(name()); 