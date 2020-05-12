function looping_a_triangle() {
    let hashes = "";
    for (let i = 0; i < 7; i++) {
      hashes += "#";
      console.log(hashes);
    }
  }

function fizzbuzz(){
    for(let i=1;i<=100;i++){
        let output = "";
        if(i%3==0){
            output+="Fizz";
        }
        if(i%5==0){
            output+="Buzz";
        }
        console.log(output || i);
    }
}

function chessboard(){
    let board = ""
    for(let i=1;i<=8;i++){
        for(let j=1;j<=8;j++){
            if((i + j) %2==0){
                board+=" "
            }
            else{
                board+="#"
            }
        }
     board+="\n"  
    }
    console.log(board)
}

const minimum = function(a, b){
    if(a<b){
        return a;
    }
    else{
        return b;
    }
}

chessboard();
fizzbuzz();
looping_a_triangle();
console.log(minimum(4,9));


  