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
  numbers.splice(y, 1);  
  return numbers
}

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
  return(numbers.filter(function(item){
    return item != numbers[y];
  }));
}

removeSmallest([1,2,1,4,5,1])
