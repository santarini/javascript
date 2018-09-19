function removeSmallest(numbers) {
  x = Math.min.apply(null, numbers);
  y = numbers.indexOf(x);
  indexCount = [];
  for (z in numbers){
    if (numbers[z] == x){
      indexCount.push(Number(z));
    }
  }
  if(indexCount.length > 1){
     y = Math.min.apply(null, indexCount);
  }
  return(numbers.filter(function(v, index){
    return index != y;
  }));
}

removeSmallest([1, 2, 3, 4, 5])
