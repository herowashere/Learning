// Now we want to use the linearSearch code written inside 
// Searching.js in our code --> How should we do it??
// Common js moduling --> require use karte haii
const searching =require('./Searching.js')
console.log("Start");
let arr=[5,4,3,6,7,9,34];
let x=8;
console.log(searching.linear(arr,x))