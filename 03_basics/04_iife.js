// Immediately Invoked Function Expressions (IIFE)

// to remove the pollution of global scope, we used iife 
// format 
// (whole fuction is now treated as an expression)()
// same as chai()
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

