$(document).ready(function()  {
  var vowels = ["a","e","i","o","u",]
  var sentence = "Believe you can and you're halfway there. Theodore Roosevelt";
  console.log(sentence.length);
  var letters = sentence.split("");
  console.log(letters);

  vowels.forEach(function(vowel){
    letters.forEach(function(letter){
      if (letter === vowel){
        var index = letters.indexOf(letter);//to retreive index of letters array
        letters.splice(index,1,"-")
      }else{
        console.log("vowel not found");
      }
    });
    var newString = letters.join("");
    console.log(newString);
  });


});
