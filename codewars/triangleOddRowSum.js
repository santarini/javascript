function triangleOddRowSum(n){
  y = Math.pow((n-1),2)+n;
  //alert(y);
  z = 0;
  for (i = 1; i < n; i++){
    x = y + (i*2);
    //alert(x);
    z = z + x;    
  }
  alert(z + y)
}
