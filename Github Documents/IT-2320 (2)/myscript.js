var timeObject = new Date();
var month = timeObject.getMonth() + 1;
var day = timeObject.getDate();
var year = timeObject.getFullYear();
var newDate = month + "/" + day + "/" + year;
var greeting = "Hello and welcome to my page! The date is: " + newDate;

function myFunction(){
	alert(greeting)
}

window.onload = function()
{
	myFunction(greeting)
	
	document.getElementById("one").onmouseover = function() {mouseOver()};
    document.getElementById("one").onmouseout = function() {mouseOut()};
	
    function mouseOver()
	{ 
		document.getElementById("one").src = "./images/Itachi.jpg";
	}
	
	function mouseOut()
	{
		document.getElementById("one").src = "./images/NarutoLogo.jpg";
	}
	
	document.getElementById("two").onmouseover = function(){mouseOn()};
	document.getElementById("two").onmouseout = function(){mouseOff()};
	
	function mouseOn()
	{
		document.getElementById("two").src = "./images/Naruto2.jpg";
	}
	
	function mouseOff()
	{
		document.getElementById("two").src = "./images/Naruto_characters.jpg";
	}
	
	document.getElementById("three").onmouseover = function(){mouseHover()};
	document.getElementById("three").onmouseout = function(){mouseHoff()};
	
	function mouseHover()
	{
		document.getElementById("three").src = "./images/NinaAlexander.jpg";
	}
	
	function mouseHoff()
	{
		document.getElementById("three").src = "./images/FullMetalAlchemist.jpg";
	}
}
