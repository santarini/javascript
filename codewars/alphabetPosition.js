function removeSmallest(numbers) {
  //find smallest number in array
  x = Math.min.apply(null, numbers);
  y = numbers.indexOf(x);
  count = []
  for (z in numbers){
    if (z == x){
      count.push(numbers.indexOf(x))
    }
  }
  if (count.lenght 
  {
    
  }

  numbers.splice(y, 1);  
  console.log(numbers);
}


removeSmallest([1,2,3,4,5])
