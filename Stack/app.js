//Stack tutorial
// palindrome words redivider, deified,
// civic, radar, level, rotor, kayak,
// reviver, racecar, madam, and refer.


var letters =[]

var word = "refer"

var rword = "";

//put letters of word into stack

for(var i =0; i<word.length; i++){
    letters.push(word[i])
}

//pop off the stack in reverse order

for(var i =0; i<word.length; i++){
    rword += letters.pop()
}

if (rword ===word){
    console.log(word + " is a palindrome");
}
else{
    console.log(word + " Is not a palindrome");
}