function alphabetPosition(text) {
  var positionList = [];
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for(x in text){
    if (alphabet.indexOf(text.charAt(x).toLowerCase()) == -1){
      continue;
    }else{
    positionList.push(alphabet.indexOf(text.charAt(x).toLowerCase())+1);
    }
   }
  alert(positionList.join(' '));
}

alphabetPosition("The sunset sets at twelve o' clock.");
