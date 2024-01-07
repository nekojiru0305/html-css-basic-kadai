let num = 25;

 if ( num % 3 === 0 ){
   console.log("3の倍数である");
} else if ( num % 5 === 0 ){
    console.log("5の倍数である");
} else if ( num % 3 === 0 && num % 5 === 0 ){
   console.log("3と5の倍数です");
} else {
    console.log("num");  
}