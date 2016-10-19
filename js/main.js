// Input how many bottles

var bottles = prompt("How many bottles are on the wall?");
var numBottles = Number(bottles);

console.log(numBottles +" bottles of beer on the wall, "+numBottles+" bottles of beer.");
console.log("Take one down and pass it around, "+numBottles+" bottles of beer on the wall.");
console.log("");

for (var i = numBottles-1; i>-1; i--) {

    if(i>1){
        console.log(i +" bottles of beer on the wall, "+i+" bottles of beer.");
        console.log("Take one down and pass it around, "+i+" bottles of beer on the wall.");
        console.log("");
    } else if (i===1){
        console.log(i +" bottles of beer on the wall, "+i+" bottles of beer.");
        console.log("Take one down and pass it around, NO MORE bottles of beer on the wall.");
        console.log("");
    } else if (i===0){
        console.log("NO MORE bottles of beer on the wall, NO MORE bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
}



