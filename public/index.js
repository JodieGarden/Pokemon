var app = function(){
  var url = 'http://pokeapi.co/api/v2';
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  //create a new XMLHttpRequest object
  var request = new XMLHttpRequest();
  //set the type of request we want with the url we want to call
  request.open("GET", url);
  //set the callback we want it to use when it has completed the call
  request.onload = callback;
  //send the request!
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var pokemon = JSON.parse(jsonString); 
  populateList(pokemon);
}

var populateList = function(pokemon){
  console.log(pokemon);
  var ul = document.getElementById('pokemon-list');

  pokemon.forEach(function(pokemon) {
    var li = document.createElement('li');
    li.innerText = pokemon.name;
    ul.appendChild(li);
  })
}

window.onload = app;