/**
* Auteur : 	DWAPS Formation - Michael Cornillon
* Cours :	Tutoriel web extension
* Mail : 	contact@dwaps.fr
* Tel :		0651279211
* Site : 	http://dwaps.fr
* Date : 	16/02/2017
**/

// Booléen d'activation/désactivation du module
var isActive = false;

document
	.addEventListener(
		"DOMContentLoaded",
		function()
		{
			// On récupère le bouton de la popup de l'extension
			var bt = document.querySelector("#btPopupDWAPS");

			// Listener
			bt.addEventListener(
				"click",
				function()
				{
					isActive = !isActive;

					// Selon l'état du booléen
					// On modifie le bouton
					if(isActive)
					{
						bt.className = "active";
						bt.innerHTML = "ON";
					}
					else
					{
						bt.className = "inactive";
						bt.innerHTML = "OFF";
					}

					// Fermeture de la popup
					window.close();
				}
			);
		}
	)
;