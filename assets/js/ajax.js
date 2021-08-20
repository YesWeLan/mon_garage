//////////////////////////////////////////////////////
//			 AJAX  		    	    //

// INITIALISATION AJAX
const containerPrincipal = document.getElementById('container_principal'); // div ayant comme id -> 'container_principal' 
									  // Toute nos page appelées seront afficher dans ce container

const xhr = new XMLHttpRequest(); // XMLHttpRequest  est stocké dans variable xhr
xhr.onreadystatechange = httpRequest;

let retourURL = xhr.reponseURL; // Récupere la valeur URL de la requête


function httpRequest()
{
	retourURL = xhr.responseURL; 	 // Selon la requête on réattribut la valeur à retourURL

	if (xhr.readyState === xhr.DONE) // Si la requête retourne 4 (terminée ou terminée et réponse prête)
	{
		if (xhr.status === 200)  // Si le status de la requête retourne 200 (code de status HTTP)
		{
			containerPrincipal.innerHTML = xhr.responseText; // On récupère le contenue du fichier html appelé lors de la requête et on écrit son contenue dans containerPrincipal.innerHTML
			loadFunctions(id);
		}
	}
}


// Charge la page d'accueil 
xhr.open('get', 'assets/html/accueil.html');
xhr.send();
