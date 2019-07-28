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