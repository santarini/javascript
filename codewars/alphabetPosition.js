function alphabetPosition(text) {
  var finalString = "";
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for(x in text){
    if (alphabet.indexOf(text.charAt(x).toLowerCase()) == -1){
      continue;
    }else{
   newString = (alphabet.indexOf(text.charAt(x).toLowerCase())+1) + " ";
    }
    finalString = finalString + newString;
  }
  alert(finalString)
}

alphabetPosition("The sunset sets at twelve o' clock.");
