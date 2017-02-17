/**
* Auteur : 	DWAPS Formation - Michael Cornillon
* Cours :	Tutoriel web extension
* Mail : 	contact@dwaps.fr
* Tel :		0651279211
* Site : 	http://dwaps.fr
* Date : 	16/02/2017
**/

document
	.addEventListener(
		"DOMContentLoaded",
		function()
		{
			// On récupère le code en background pour accéder à ses variables
			var bg = chrome.extension.getBackgroundPage();

			// On récupère le bouton de la popup de l'extension
			var bt = document.querySelector("#btPopupDWAPS");

			// On affecte au bouton de la popup
			// les paramètres persistés dans bg.btPopup
			if(bg.btPopup)
			{
				bt.className = bg.btPopup.className;
				bt.innerHTML = bg.btPopup.innerHTML;
			}

			// Listener
			bt.addEventListener(
				"click",
				function()
				{
					// On récupère le booléen depuis le code en background
					// et on met à jour sa valeur
					bg.isExtensionActive = !bg.isExtensionActive;

					// Selon l'état du booléen
					// On modifie le bouton
					if(bg.isExtensionActive)
					{
						bt.className = "active";
						bt.innerHTML = "ON";
					}
					else
					{
						bt.className = "inactive";
						bt.innerHTML = "OFF";
					}

					// On indique au background
					// qu'il y a eu un clic sur le bouton
					// De cette façon, il pourra décidé quoi faire
					bg.dwaps.action();

					// Persistance classe bouton popup
					bg.btPopup = bt;

					// Fermeture de la popup
					window.close();
				}
			);
		}
	)
;