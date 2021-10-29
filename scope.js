 // 3 ways:
 // let a
 // var a
 // const a

 var a = 2; // --> Global Scope
 console.log(a)

 function test() {
     console.log("from function", a)
     var d = 2; // --> Local scope 
 }
 //  console.log(d)    //--> Thrwos an error 
 test();
 let c = 3;
 if (c == 3) {
     let w = 5
     console.log(w) // --> Block scope
 }
 //console.log(w) // Throws error