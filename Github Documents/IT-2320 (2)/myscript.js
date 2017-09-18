function imgChange(myImage3)
{
	myImage3.src = '../images/Itachi.jpg';
	
}

function imgAway(myImage3)
{
	myImage3.src = '../images/NarutoLogo.jpg';
}

function imgHover(myImage)
{
	myImage.src = '../images/Naruto2.jpg';
	
}

function mouseAway(myImage)
{
	myImage.src = '../images/Naruto_characters.jpg';
}


function imgOn(myImage2)
{
	myImage2.src = '../images/NinaAlexander.jpg';	
}

function mouseOff(myImage2)
{
	myImage2.src = '../images/FullMetalAlchemist.jpg';
}

var timeObject = new Date();
var month = timeObject.getMonth() + 1;
var day = timeObject.getDate();
var year = timeObject.getFullYear();
var newDate = month + "/" + day + "/" + year;
var greeting = "Hello and welcome to my page! The date is: " + newDate;

function myFunction(greeting)
{
	alert(greeting);
}

