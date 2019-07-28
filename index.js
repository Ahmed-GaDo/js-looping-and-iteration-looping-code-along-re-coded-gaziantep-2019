// Code your solutions in this file
const gifts = ["Ada", "Brendan", "Ali"] 
//const B = "Birthday"
const B = "birthday"
//function writeCards (gifts, B);
// writeCards (["Ada", "Brendan", "Ali"], "Birthday");
function writeCards (gifts, B){
    for (let i=0 ; i < gifts.length ; i ++ ) {
     console.log(`Thank you, ${gifts[i]}, for the wonderful ${B} gift.`);
    }
    return gifts 
}
console.log(writeCards(gifts, B));

//const number ;
function countdown (number){
    let i = number 
    ///while (i >= 0) {
     //   console.log(i);
    //}
    //i--; }
    while (i >= 0) {
        console.log(i);
        i--;
    }
    

}
console.log(countdown(number));