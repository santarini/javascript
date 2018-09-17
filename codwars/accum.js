/*
accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
*/

function accum(testStr) {
  //create a final string placeholder
  finalStr = "";
  //recieve input string
  var str = testStr;
  //loop through all characters in string
    for (x in str){  
      var char = str.charAt(x);
      //parseFloat used to forced math else JS gives string concat
      var y = parseFloat(x) + 1;
      //if this is this is Not last iteration concat with hyphen else no hypehn
      if (x == str.length - 1){
        //force to lowercase, was having issue with capital letters in input
        charStr = char.repeat(y).toLowerCase();
        finalStr = finalStr + charStr.charAt(0).toUpperCase() + charStr.slice(1);
      }else{
        charStr = char.repeat(y).toLowerCase();
        finalStr = finalStr + charStr.charAt(0).toUpperCase() + charStr.slice(1) + "-";
      }
    }
    return(finalStr);
    //alert(finalStr);
}
