function alphabetPosition(text) {
  var finalString = "";
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for(x in text){
    if (alphabet.indexOf(text.charAt(x).toLowerCase()) == -1){
      continue;
    }if(x == 0){
    newString = (alphabet.indexOf(text.charAt(x).toLowerCase())+1);
    }else{
   newString = " " + (alphabet.indexOf(text.charAt(x).toLowerCase())+1); 
    }
    finalString = finalString + newString;
  }
  return(finalString);
}

alphabetPosition("The sunset sets at twelve o' clock.");
