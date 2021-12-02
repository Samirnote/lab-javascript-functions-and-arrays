

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(bigWord) {
  
  if (!words[0]){
    return null;
  }
  
  if (!words[1]){
    return words[0];
  }
   else {
         for (let i=0; i<words.length; i++){

          console.log(words[i]);
        // return words[i].length > words[i+1].length ? words[i] : words[i+1];

  }
}
}