// var c =300
let a =300
if (true) {
    let a = 10
    const b =20
    // var c = 30
    // console.log("INNER : ", a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);

//Browser scope and node scope are different

function one(){
    const username = "Prit"

    function two(){
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website);
     two()
}

//  one()


if (true) {
    const username ="Prit"
    if(username === "Prit"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// This is a first way of declaration of function
console.log(addOne(5));
 //when we log before initialization it will execute
function addOne(num){
    return num + 1
}

// this is a second way of declaration of function with expression
console.log(addTwo(2));
/*on the otherhand when we log this second function with expression before initialization then it will give an error msg Cannot access before initialization*/
const addTwo = function(num){
    return num + 2
}


