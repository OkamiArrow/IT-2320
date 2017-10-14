function displayHoliday(Holiday)
{
	alert(Holiday.Favorite_Holiday);
	alert(Holiday.Favorite_Holiday_Treat);
	alert(Holiday.Favorite_Holiday_Movies[0].movieName);
	alert(Holiday.Favorite_Holiday_Movies[0].Killer);
	alert(Holiday.Favorite_Holiday_Movies[0].Survivor);
	
	for(var i = 0; i < Holiday.Favorite_Holiday_Movies.length; i++)
	{
		var movie = Holiday.Favorite_Holiday_Movies[i];
		alert(movie.movieName + " " + movie.Killer + " " + movie.Survivor);
	}
}


function CreateObjectHalloweenTalk()
{
		return {
				"Favorite_Holiday" : "Favorite Holiday: Halloween",
				"Favorite_Holiday_Treat" : "Favorite Holiday Treat: Candy Apples",
				"Favorite_Holiday_Movies" : [
				{
					"movieName" : "Movie: Friday 13TH ",
					"Killer" : " Killer: Jason Vorhees (or his mother...) ",
					"Survivor" : " Who survives: Usually just one person "
				},
				
				{
					"movieName" : " Movie: NightMare On Elm Street ",
					"Killer" : " Killer: Freddy Krueger ",
					"Survivor" : " Who survives: Nancy "
				},
				
				{
					"movieName" : " Movie: Chucky ",
					"Killer" : " Killer: Mans soul trapped inside a GoodGuy doll ",
					"Survivor" : " Survivor: Andy and now Nica "
				},
				
				{
					"movieName" : " Movie: Texas Chainsaw Massacre ",
					"Killer" : " Killer: Ed Gein ",
					"Survivor" : " Who survives: Usually nobody "
				},
				
				{
					"movieName" : " Movie: Scream ",
					"Killer" : " Killer: GhostFace ",
					"Survivor" : " Who survives: Sidney Prescott "
				},
				
				{
					"movieName" : " Movie: Halloween ",
					"Killer" : " Killer: Michael Myers ",
					"Survivor" : " Who survives: Laurie Strode/Myers "
				}
				
				]
			};
}

$(document).ready(function(){

			$(".button").mouseover(function(){
					$(this).css("border","3px dashed #a00707");
				});	
			$(".button").mouseout(function(){
					$(this).css("border","2px solid black");
					});
			$(".button1").click(function(){
						var Holiday = CreateObjectHalloweenTalk();
						displayHoliday(Holiday);
					});
});