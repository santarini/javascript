function accum(testStr) {
  finalStr = "";  
  var str = testStr;
    for (x in str){  
      var char = str.charAt(x);
      var y = parseFloat(x) + 1;
      if (x == str.length - 1){
        charStr = char.repeat(y);
        finalStr = finalStr + charStr.charAt(0).toUpperCase() + charStr.slice(1);
      }else{
        charStr = char.repeat(y)
        finalStr = finalStr + charStr.charAt(0).toUpperCase() + charStr.slice(1) + "-";
      }
      
    }
    alert(finalStr);
}

accum("TeSt")
