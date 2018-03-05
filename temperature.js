function tempConvert(farenheit){
	return (5/9) * (farenheit-32);
}
      
var y = 77;
var x = tempConvert(y);
var text = "The temperature in Farenheit is " + y + ", the temperature in celsius is " + x;

console.log(text);
