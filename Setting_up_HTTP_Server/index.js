// using http module (Inbuilt given by node) we can setup a
// basic server
const http=require('http');
const PORT=3000;
/**
 * Http module contains a function called createServer
 * this createServer function takes callback as an input
 * Now inside the callback,we get two arguments
 * - request -> this argument contains all the details about the incoming request
 * - response -> this argument contains functions using which we can prepare the response
 * 
 * createServer function returns us the server object
 */

const server=http.createServer(function exec(request,response){
    console.log(request.method);
    if(request.url==="/home") 
    {
        response.end("Welcome to Home");
    }
    else if(request.url==="/faq")
    {
        console.log("List of Faqs");
    }
    else{
        response.end("Hello dude");
    }
});

server.listen(PORT,function process(){
//once the server has started we will execute this callback
console.log("Server started on port: ",PORT);
});  