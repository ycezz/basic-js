// global scope / window scope
var a = 1;


function tes() //scope function
    {
        var b = 2; //variabel didalam function namanya variabel local
        console.log(b);
    }
    tes();
