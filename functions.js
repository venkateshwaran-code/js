
// Function Statement and Function Declaration
function first() {
    console.log("Function called A");
}
first();
// Function Expression
var A=function second() {
    console.log("Function called B");
}
A();
// Anonymes function
var B=function(){
console.log("Anonymes");
}
B();

// Parameters Return type and Arguments in Functions
function common(param1) {
    return param1;
}
var reslut=common("parameter function");
console.log(reslut)
// Parameters Return type and Arguments in Functions
function com() {
    return ()=>{
        console.log("Return function");
    }
}
var res=com();
console.log(res)

//Arrow functions
var a=()=>{
    console.log("Arrow function");
}
console.log(a);
//Arrow functions
var b=(param1)=>{
    console.log(param1);
}
console.log(()=>{

});
console.log(b);