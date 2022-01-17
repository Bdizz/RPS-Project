let computer = function() {
    
    // storing random number 1-3 in var num
    let num = Math.floor((Math.random() * 3) + 1);

    // based on number return string (either R, P, S)
    if (num == 1) {
        return "Rock";
    } else if (num == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
  
}

console.log(computer());