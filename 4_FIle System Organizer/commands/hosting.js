console.log(a)//undefined
greet()//hello
var a=1;//if we give a let then it give error e.g. let const a
//console.log(a)undefined -print
//console.log(b)-undefined-temporaldeal zone
//let b=3
//three problem in JSON
//instilisation error with const and let
//scoping ,redeclaration,Accessibility
//hosting and Temporal dead zone.very important
//a variable can be used before it has been declared that  is the main concept used in js in semantic analysis phase of compiler

let aObj={}//primtive datatype but belong to object datatype
console.log(a,typeof(a))
// temporal dead zone-it is just area where if you try to access variable defined with
//let and const before their instialisation you wont be able to do it.

function greet(){
    console.log('hello')
}