// Var Variables
// With var based variables you can redefine and reassign 
// Which can be bad for our app
// Function scoped

// Let Variables
// With Let I can reassign 
// With let you can not redefine
// Function scoped

// Const
// Cannot be redefined
// Function scoped

// Block Scoping 
var fullName = "Yves Mugenga"

if(fullName) {
    // We can't access Let and Const outside block 
    // scope of definition
    // But we can with Var
    var firstName = fullName.split(' ')[0];
    console.log(firstName)
}
console.log(firstName)