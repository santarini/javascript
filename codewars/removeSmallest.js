function removeSmallest(numbers) {
  //find smallest number in array
  x = Math.min.apply(null, numbers);
  y = numbers.indexOf(x);
  count = 0;
  for (z in numbers){
    if (z == x){
      count +=1;
    }
  }
  numbers.splice(1, y);  
  console.log(numbers);
}


removeSmallest([1,2,3,4,5])
