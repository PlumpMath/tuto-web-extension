/**
* Auteur : 	DWAPS Formation - Michael Cornillon
* Cours :	Tutoriel web extension
* Mail : 	contact@dwaps.fr
* Tel :		0651279211
* Site : 	http://dwaps.fr
* Date : 	16/02/2017
**/


var allTags = [
	document.querySelectorAll("div"),
	document.querySelectorAll("p"),
	document.querySelectorAll("span"),
	document.querySelectorAll("textarea"),
	document.querySelectorAll("a"),
	document.querySelectorAll("h1"),
	document.querySelectorAll("h2"),
	document.querySelectorAll("h3"),
	document.querySelectorAll("h4"),
	document.querySelectorAll("h5"),
	document.querySelectorAll("h6")
];

for( var i = 0; i < allTags.length; i++ )
{
	var tags = allTags[i];

	for( var j = 0; j < tags.length; j++ )
	{
		tags[j].style.color = "transparent";
	}
}