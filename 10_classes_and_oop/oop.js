const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// this is an object which indicates the current context,
// so when we use it inside a constructor function, then it creates an empty object with those keys...
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

// Now, when we call the constructor function without using new keyword then the original this object gets changed or updated, i.e. each time the value get changed, e.g. console.log() for userOne and userTwo will give you two diff object
// Also, it will give you all the other details present in the global context
// So, to avoid this we use the new keyword 
// new keyword creates a new instance of this object, not affecting the original this object, so now we get a this object that only contains the value we used in the constructor function 
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);
