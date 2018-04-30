let $ = jQuery
$(document).ready(function() {

	var getTitle = function(){
		
    var film = $('#term').val();
		var film = encodeURIComponent(film);
		
    if (film == '') {
      $('#poster').removeClass('hide').addClass("fadeIn");  
      $('#poster').html("<h2>You forget to enter a film title.</h2>");
    } else {
      
      $('#poster').html("<h2>Searching now!</h2>");

      $('#poster').removeClass('hide').addClass("fadeIn");
      
      $.getJSON("https://api.themoviedb.org/3/search/movie?"
								+ '&query=' + film
								+ '&include_video=true'
								+ '&include_adult=false'
								+ '&sort_by=popularity.desc'
								+ '&language=en-US'
								+ '&api_key=855d0f27ac90850576cebfa7bc46b9f6',
							 			
										//what to do with the data on success
										function(data){

													if(data.results !== 0) {

                            $('#suggestedTitles').fadeIn(200);  
														console.log("You are looking for " + film);
														console.log(data);

                            // first let's show the top results
                            
                            $.each(data.results,function(index, val){
                                   $('#suggestedTitles').append('<li><p class="filmTitle">' + val.title + '&nbsp;<em style="color: #aeaeae; font-size: 0.6rem;">' + val.release_date.substring(0,4) + '</em></p><p class="filmId" style="display: none;">' + val.id + '</p></li>');
                            });                               
                            
                            $('#suggestedTitles li').click(function(){
                              
                              $('#suggestedTitles').empty();
                              var pickedFilmId = $(this).children('.filmId').text();
                              var pickedFilm = $(this).children('.filmTitle').text();
                              console.log('You picked ' + pickedFilm + ' with ID ' + pickedFilmId);                      
                              
                              $('#suggestedTitles').fadeOut(200);
                              
                              
                              for(var i = 0; i < data.results.length; i++)
                              {
                                
                                if(data.results[i].id == pickedFilmId)
                                {
                                    $('#poster').html('<div class="resultsHead"><img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + data.results[i].poster_path + '"/><h2>' + data.results[i].title + '</h2>');
                                    $('#poster').append('<em class="releaseDate">' + data.results[i].release_date.substring(0,4) + '</em>' + '<br /><p class="description">' + data.results[i].overview + '</p></div><div class="clearfix"></div>');
                                  
                                    if(data.results[i].vote_average >= 7) {
                                        $('#poster').append('<p>Your movie taste is: <strong>Pretentious Jerkface</strong></p>');
                                    } else {
                                        $('#poster').append('<p>Your movie taste is: <strong>Slobbering dingus</strong></p>');
                                    }
                                }
                              }

                            })
														

														

												} else {
													$('#poster').html("<h2>So sorry, we couldn't find anything.</h2>");
												}									
									}
							 );
    
    } return false;
  }

$('#search').click(getTitle);

});