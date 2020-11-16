let request      = new XMLHttpRequest();
let inputTitle   = document.getElementById('title');
let inputYear    = document.getElementById('year')
let buttonSearch = document.getElementById('btnsearch');
let movieList    = document.getElementById('movielist');

request.onreadystatechange = function() {
	if (this.readyState === 4 && this.status === 200) {

		response = JSON.parse(this.responseText);
		console.log(JSON.parse(this.responseText));

		let movies = response.Search;
		
		// clears the list after each search.
		movielist.innerHTML = ''; 

		for (var i = 0; i < movies.length; i++) {

			let listItem = document.createElement('li');
			let poster   =  document.createElement('img');

			listItem.innerHTML = movies[i].Title + '<br>' + movies[i].Year + '<br>';
	        poster.src = movies[i].Poster;
			movielist.appendChild(listItem).appendChild(poster);
		}
	}
}


buttonSearch.addEventListener('click', sendRequest);
function sendRequest() {
	//ad http: in the begining of the link if it's not published on a webiste online
	request.open('GET', '//www.omdbapi.com/?apikey=96b395b1&s=' + inputTitle.value + '&y=' + inputYear.value);
	request.send();

    // Alert that the user must write a title.
	if(inputTitle.value === ''){
		alert('you must add a title');
	};

}

// Makes it possible to use enter.
inputTitle.addEventListener('keyup', enter);
function enter(){
	if(event.keyCode == 13 || event.which == 13){
  	   sendRequest();
    }
}

inputYear.addEventListener('keyup', enter);
function enter(){
	if (event.keyCode == 13 || event.which == 13){
	    sendRequest();
    }
}

