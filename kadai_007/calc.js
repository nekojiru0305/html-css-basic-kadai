
let num = Math.floor(Math.random() * 10);


// 変数numの値が3の倍数の場合、「3の倍数です」という文字列を出力する
if ( num % 3 === 0 ){
  console.log("3の倍数である");
}


// 変数numの値が5の倍数の場合、「5の倍数です」という文字列を出力する
if ( num % 5 === 0 ){
    console.log("5の倍数である");
  }
  

// 変数numの値が3と5の倍数の場合、「3と5の倍数です」という文字列を出力する
if ( num % 3 === 0 && num % 5 === 0 ){
  console.log("3と5の倍数です");
}


// それ以外のときは、「num」という文字列を出力する
else{
    console.log("num");  
}