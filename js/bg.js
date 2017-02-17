/**
* Auteur : 	DWAPS Formation - Michael Cornillon
* Cours :	Tutoriel web extension
* Mail : 	contact@dwaps.fr
* Tel :		0651279211
* Site : 	http://dwaps.fr
* Date : 	16/02/2017
**/

// Booléen d'activation/désactivation du module
var isExtensionActive = false;

// Variable pour stocker le bouton de la popup
// en vue de son affichage :
// Si le module est actif, le bouton doit être à ON
var btPopup = null;

// ... ou dès la mise à jour de l'onglet
// (la création d'un onglet compte aussi pour une mise à jour)
chrome.tabs.onUpdated.addListener(
	function()
	{
		if(isExtensionActive)
		{
			dwaps.action();
		}
	}
);


// Découverte de chrome.tabs.query...
var dwaps = {
	action: function()
	{
	    try {
	    	chrome.tabs.query(
	    		{
				    active: true
				},
				function(tabs)
				{
					var tab = tabs[0];

					// Selon l'état de l'extension
					// on souhaite réinitialiser la page ou faire disparaître ses textes
					var idText = isExtensionActive ? "hideText" : "refreshPage";

			        chrome
			        	.tabs
			        	.sendMessage(
			        		tab.id,
			        		{
			        			text: idText
			        		}
			        	)
			        ;
				}
			);
	    }
	    catch ( error ) {
	        alert( error );
	    }
	}
};