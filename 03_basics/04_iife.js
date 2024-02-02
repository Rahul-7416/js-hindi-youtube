// Immediately Invoked Function Expressions (IIFE)

// to remove the pollution of global scope, we used iife 
// format 
// (whole fuction is now treated as an expression)()
// same as chai()
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // we have used ; over here as witout this JS will not know where this iife ends

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

