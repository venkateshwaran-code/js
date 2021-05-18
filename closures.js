//closures
function A()
{
    var x=10;
    function B()
    {
        console.log(x);
    }
    
    B();
}
A();

// return closures

function X()
{
    var a=20;
    function Y()
    {
        console.log(a);
    }
    
    return Y;
}


var Z=X();
console.log(Z());

// inside common function
function fun()
{
    function A()
{
    var x=30;
    function B()
    {
        console.log(x);
    }
    
    B();
}
A();
}
fun();