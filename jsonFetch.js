fetch('https://api.iextrading.com/1.0/stock/aapl/financials')
.then(function(response){
  return response.json();
})
.then(function(myJson){
  console.log(JSON.stringify(myJson));
});
