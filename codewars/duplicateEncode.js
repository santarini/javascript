function duplicateEncode(word){
   word = word.toLowerCase();
   secretCode = [];
   for(x in word){
     letterCount = word.match((new RegExp(word.charAt(x), "g")) || []).length;
     if (letterCount == 1){
        secretCode.push("(");
     }else{
        secretCode.push(")");
      }
   }
   console.log(secretCode.join().replace(new RegExp(",", "g"),""));
}

duplicateEncode("balls")
