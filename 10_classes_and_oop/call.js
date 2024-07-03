// Please go through the video-42, Call and this in javascript || for better understanding

function SetUsername(username){
    //complex DB calls
    this.username = username // NOTE: the "this" we are using here without using ".call" method -> then "this" only have a context of SetUsername and will be lost once the execution context of SetUsername is destroyed from the call stack.
                             // So, to hold the return value we can pass our own "this" when we use SetUsername.call as the first parameter and the value to be stored as the second parameter
    console.log("called");
}

function createUser(username, email, password){
    // We have used call to hold the value which SetUsername function is returning
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
