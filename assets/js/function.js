/////////////////////////
//      LOAD PAGE      //

function loadPage()													
{	
    id = this.getAttribute('id');

    if (id === 'accueil' || id === 'accueil_footer' || id === 'logo')
    {
        xhr.open('get', 'assets/html/accueil.html');
        xhr.send();
    }

    else if (id === 'catalogue_voiture' || id === 'catalogue_voiture_footer')
    {
        xhr.open('get', 'assets/html/catalogue.html');
        xhr.send();
    }

    else if (id === 'contact' || id === 'contact_footer')
    {
        xhr.open('get', 'assets/html/contact.html');
        xhr.send();
    }

    else if (id === 'info' || id === 'info_footer')
    {
        xhr.open('get', 'assets/html/info.html');
        xhr.send();
    }

    const containerMenu = document.getElementById('container_menu');

    // Si largeur écran inférieur ou égale à 780 ET id n'est pas égale à 'logo'
    if (window.innerWidth <= 780 )
    {
        // Si containerMenu est display = 'flex'
        if (containerMenu.style.display === 'flex')
        {
            // On cache le container après le clique sur lien
            containerMenu.style.display = 'none';
        } 
        
        else 
        {
            // Sinon on laisse en display = 'none'
            containerMenu.style.display = 'none';
        }
    }
    setTimeout(function(){window.scrollTo(0,0);}, 180);
}


/////////////////////////
//      SHOW MENU      //

function showMenu() 
{
    let containerMenu = document.getElementById('container_menu');

    if (containerMenu.style.display === 'flex') 
    {
      containerMenu.style.display = 'none';
    } 
    
    else 
    {
      containerMenu.style.display = 'flex';
    }
}


//////////////////////////
//     COLOR MENU       //

function colorMenu()
{
    elementEncour = document.getElementById(id);
    lumiereEnCour = document.getElementById(`lumiere_${id}`);

    if (window.innerWidth > 780)
    {  
        // lien menu (text-shadow / color)
        accueil.style.color = 'rgba(0,0,0,.5)';
        catalogueVoiture.style.color = 'rgba(0,0,0,.5)';
        contact.style.color = 'rgba(0,0,0,.5)';
        info.style.color = 'rgba(0,0,0,.5)';

        accueil.style.textShadow = 'none';
        catalogueVoiture.style.textShadow = 'none';
        contact.style.textShadow = 'none';
        info.style.textShadow = 'none';

        // lumière (box-shadow / bg-color) 
        lumiereAccueil.style.backgroundColor = 'rgba(0,0,0,.5)';
        lumiereCatalogueVoiture.style.backgroundColor = 'rgba(0,0,0,.5)';
        lumiereContact.style.backgroundColor = 'rgba(0,0,0,.5)';
        lumiereInfo.style.backgroundColor = 'rgba(0,0,0,.5)';

        lumiereAccueil.style.boxShadow = '0 0 1px #12130F, 0 -1px 0 rgba(0, 0, 0, .4)';
        lumiereCatalogueVoiture.style.boxShadow = '0 0 1px #12130F, 0 -1px 0 rgba(0, 0, 0, .4)';
        lumiereContact.style.boxShadow = '0 0 1px #12130F, 0 -1px 0 rgba(0, 0, 0, .4)';
        lumiereInfo.style.boxShadow = '0 0 1px #12130F, 0 -1px 0 rgba(0, 0, 0, .4)';

        if (elementEncour.getAttribute('id') === id)
        {
            // Si on clique sur le logo ou le lien 'accueil' du footer
            if (elementEncour.getAttribute('id') === 'logo' || elementEncour.getAttribute('id') === 'accueil_footer') 
            {
                accueil.style.color = '#F7F7F7';    // On colorie le lien 'accueil' du menu
                accueil.style.textShadow = '0 1px 2px #F7F7FF, 0 -1px 0 rgba(0, 0, 0, .4)';
                lumiereAccueil.style.backgroundColor = '#F7F7FF';
                lumiereAccueil.style.boxShadow = '0 1px 2px #F7F7FF, 0 -1px 0 rgba(0, 0, 0, .4)';
            }
            
            // Si on clique sur le lien 'nos voiture' du footer
            else if(elementEncour.getAttribute('id') === 'catalogue_voiture_footer')
            {
                // On colorie le lien 'nos voiture' du menu
                catalogueVoiture.style.color = '#F7F7FF'; 
                catalogueVoiture.style.textShadow = '0 1px 2px #F7F7FF, -1px 0 rgba(0, 0, 0, .4';
                lumiereCatalogueVoiture.style.backgroundColor = '#F7F7FF';
                lumiereCatalogueVoiture.style.boxShadow = '0 1px 2px #F7F7FF, 0 -1px 0 rgba(0, 0, 0, .4)';
            }

            else if (elementEncour.getAttribute('id') ===  'contact_footer') // ...
            {
                contact.style.color = '#F7F7FF';
                contact.style.textShadow = '0 1px 2px #F7F7FF, -1px 0 rgba(0, 0, 0, .4';
                lumiereContact.style.backgroundColor = '#F7F7FF';
                lumiereContact.style.boxShadow = '0 1px 2px #F7F7FF, 0 -1px 0 rgba(0, 0, 0, .4)';
            }

            else if (elementEncour.getAttribute('id') === 'info_footer')
            {
                info.style.color = '#F7F7FF';
                info.style.textShadow = '0 1px 2px #F7F7FF, -1px 0 rgba(0, 0, 0, .4';
                lumiereInfo.style.backgroundColor = '#F7F7FF';
                lumiereInfo.style.boxShadow = '0 1px 2px #F7F7FF, 0 -1px 0 rgba(0, 0, 0, .4)';
            }

            else
            {
                // Sinon si on clique sur lien du menu on colorie le lien en cours
                elementEncour.style.color = '#F7F7FF'; 
                elementEncour.style.textShadow = '0 1px 2px #F7F7FF, -1px 0 rgba(0, 0, 0, .4';
                lumiereEnCour.style.backgroundColor = '#F7F7FF';
                lumiereEnCour.style.boxShadow = '0 1px 2px #F7F7FF, 0 -1px 0 rgba(0, 0, 0, .4)';
            }
        }
    }
}


//////////////////////////
//   DIAPO IMAGE PUB    //

function diapoImagePub()
{
	imagePub = document.getElementById('image_pub');

    // Si ImagePub n'est pas null
    if (!imagePub === false)					
    {	
        // On attribut l'attribut src et la valeur (i)
        imagePub.setAttribute('src', imagePubArray[i]);

        // Si i est inférieur à imagePubArray.length - 1 (car tableau commence à partir de 0)
        if (i < imagePubArray.length - 1)
        {
            // On incrémente i pour afficher l'image suivante
            i++; 	
        }

        else
        {
            // On remet 'i' à 0
            i = 0;
        }	
    }

    else
    {
        // Return false sinon la fonction continue d'attribuer un nouvelle attribut 'src' et cela génére un msg d'erreur dans la console car quand on change d'onglet (ex: contact, nos voitures, ...), imagePub devient null
        return false;
    }
}


//////////////////////////
//     VOIR VEHICULE    //

function voirVehicule()
{   
    id = 'catalogue_voiture';
    colorMenu();
    setTimeout(function(){window.scrollTo(0,0);}, 180);
    setTimeout(function(){chargePhoto();}, 180);
    xhr.open('get', 'assets/html/catalogue.html');
    xhr.send();
}


//////////////////////////
//      INPUT EVENT     //

// EVENT FORMULAIRE 
function inputEvent()
{
    // Form
    const formulaire = document.getElementById('formulaire_contact')

    // Input
    const inputNom = document.getElementById('nom_form');
    const inputEmail = document.getElementById('email_form');
    const inputTextarea = document.getElementById('message_form');

    // Event
    inputNom.addEventListener('input', checkInputNom);
    inputEmail.addEventListener('input', checkInputEmail);
    inputTextarea.addEventListener('input', checkInputTextarea);

    formulaire.addEventListener('submit', function(e)
    {
        // evite le rechargement de page au click du bouton 'Envoyer'
        e.preventDefault();

        // Recupere la valeurs des elements input et textarea du formulaire (saisie)
        const nomValue = inputNom.value;
        const emailValue = inputEmail.value;
        const textareaValue = inputTextarea.value;
        const r1 = /[0-9]/;
        const r2 = /[^a-z]/i; 
        const patNom = inputNom.getAttribute('pattern');
        const patEmail = inputEmail.getAttribute('pattern');

        // Conditon pour valider l'envoi du formulaire
        // SI la longeur de la saisie Nom est différente de 0 ET la saisie de Nom ne contient pas de chiffres ET la saisie de Nom ne contient pas de caractere alphabétique ET la saisie correspond à la pattern de l'input Nom 
        if (nomValue.length != 0 && !nomValue.match(r1) && !nomValue.match(r2) && nomValue.match(patNom))
        {   
            // Si la longeur de la saisie Email est différente de 0 ET la saisie Email correspond à la pattern de l'input E-mail
            if (emailValue != 0 && emailValue.match(patEmail))
            {
                // Si la longeur saisie de Textarea est différente de 0 || (penser à traiter les caracteres type >, <, /, ...), non traité dans ce code
                if (textareaValue != 0 && textareaValue.length > 10)
                {
                    alert('Votre message à bien été envoyer\nVous allez être redirigé vers l\'accueil');
                    xhr.open('get', 'assets/html/accueil.html');
                    xhr.send(); 
                }
            }
        }

        else 
        {
            // boutton 'Envoyer' n'envoi rien
            return false;
        }
    });
}


//////////////////////////
//   CHECK INPUT NOM    //

function checkInputNom()
{
    // éléments input
    const nom = document.getElementById('nom_form');
    
    // valeur saisie input
    let nomValue = nom.value;

    const r1 = /[0-9]/;
    const r2 = /[^a-z]/i; 
  
    const pat = this.getAttribute('pattern');

    // On réapplique les memes conditions que la fonction de l'évènement 'submit' (plus haut) pour traiter 'l'estetique' (border, ...)
    if (nomValue.length != 0)
    {
        if (nomValue.length > 0 && nomValue.length < 3 || nomValue.length > 20 || nomValue.match(r1) || nomValue.match(r2) || !nomValue.match(pat))
        {
            nom.style.border = borderInvalid
        }

        else
        {
            nom.style.border = borderValid;
        }   
    }

    else
    {
        nom.style.border = borderDefault;
    }
}


////////////////////////////
//   CHECK INPUT EMAIL    //

function checkInputEmail()
{
    // éléments input
    const email = document.getElementById('email_form');
    
    // valeur saisie input
    let emailValue = email.value;

    const pat = this.getAttribute('pattern');

    // On réapplique les memes conditions que la fonction de l'évènement 'submit' (plus haut) pour traiter 'l'estetique' (border, ...)
    if (emailValue != 0)
    {
        if (emailValue.match(pat))
        {
            email.style.border = borderValid;
        }
        else 
        {
            email.style.border = borderInvalid;
        }
    }

    else
    {
        email.style.border = borderDefault;
    }
}


////////////////////////
//   CHECK TEXTAREA   //

function checkInputTextarea()
{
    // éléments input
    const textarea = document.getElementById('message_form');

    // valeur saisie input
    let textareaValue = textarea.value;

    // On réapplique les memes conditions que la fonction de l'évènement 'submit' (plus haut) pour traiter 'l'estetique' (border, ...)
    if (textareaValue != 0)
    {
        if (textareaValue.length > 10)
        {
            textarea.style.border = borderValid;
        }
        else 
        {
            textarea.style.border = borderInvalid;
        }
    }

    else
    {
        textarea.style.border = borderDefault;
    }
}


////////////////////////
//   COPIER ADRESSE   //

function copierAdresse() 
{
	containerInfo = document.getElementById('container_info');
	const adresse = document.getElementById('adresse');
	adresse.select();
	document.execCommand("copy");

	// On insert les elements pour afficher modal box
	// Affiche 'L'adresse à été copier'
	containerInfo.appendChild(modal);
	modal.appendChild(popup);
	popup.appendChild(close);
	popup.appendChild(text);
		
	// Animation d'ouverture du modal
	modal.style.animation = 'opacity .5s linear';
	popup.style.animation = 'rightToLeft .5s linear';

	// On evite le debordement lorsque le menu est affiché
	body[0].style.overflowX= 'hidden';	
	html[0].style.overflowX = 'hidden';

	// On supprime les proprietés animation apres l'animation d'ouverture du modal
	setTimeout(function(){modal.style.removeProperty('animation');}, 500);
	setTimeout(function(){popup.style.removeProperty('animation');}, 500);
}


/////////////////////
//   MODAL CLOSE   //

function modalClose()
{	
	// Timeout .5s pour laisser se jouer l'animation de fermeture
	setTimeout(function(){containerInfo.removeChild(modal)}, 500); // On supprime le modal

	// On supprime la propriété une fois la fenetre fermée 
	body[0].style.removeProperty('overflow-x');
	html[0].style.removeProperty('overflow-x');
	
	// Animation fermeture
	modal.style.animation = 'opacity2 .5s linear';
	popup.style.animation = 'leftToRight .5s linear';
}


/////////////////////////
//   LOAD FUNCTIONS    //

function loadFunctions(id)
{
    if (id === 'accueil' || id === 'accueil_footer' || id === 'logo')
    {
        window.onload = diapoImagePub();
    }

    if (id === 'catalogue_voiture' || id === 'catalogue_voiture_footer')
    {
        window.onload = chargePhoto();
    }

    if (id === 'contact' || id === 'contact_footer')
    {
        window.onload = inputEvent();
    }  
}


/////////////////
//   WINDOW    //

// GERE LE COMPORTEMENT DU MENU ET DES ELEMENTS DU HEADER SELON LA TAILLE DE LA FENETRE
function checkWindow()
{
	width = window.innerWidth;
	height = window.innerHeight;

    const containerMenu = document.getElementById('container_menu');

    // MENU SI RESIZE
    // Si largeur fenêtre est supérieur à 780px ET containerMenu est en display = 'none'
    if (width > 780 && containerMenu.style.display === 'none')
    {
        // On l'affiche (si user utilise le menu et qu'il resize la fenêtre par la suite le menu est en dislay = 'none' sans cette condition)
        containerMenu.style.display = 'flex'; 
    }
   
    // Sinon si largeur fenêtre est inférieur ou égale à 780px et que containerMenu est en display = 'flex' ou 'block'
    else if (width <= 780 && containerMenu.style.display === 'flex' )
    {
        // On cache le menu
        containerMenu.style.display = 'none';
    }

    // ELEMENTENCOUR SI RESIZE
    // Si on resize la fenetre et que la largeur est supérieur à 780px
    if (window.innerWidth > 780)
    {
        // On repasse la couleur des liens du menu par defaut 
        accueil.style.color = 'rgba(0,0,0,.5)';
        catalogueVoiture.style.color = 'rgba(0,0,0,.5)';
        contact.style.color = 'rgba(0,0,0,.5)';
        info.style.color = 'rgba(0,0,0,.5)';
    }

    else
    {
        // Sinon si inférieur à 780, on repasse la couelur des lien du menu en blanc (smart.css)
        accueil.style.color = '#F7F7FF';
        catalogueVoiture.style.color = '#F7F7FF';
        contact.style.color = '#F7F7FF';
        info.style.color = '#F7F7FF';

        accueil.style.textShadow = 'none';
        catalogueVoiture.style.textShadow = 'none';
        contact.style.textShadow = 'none';
        info.style.textShadow = 'none';
    }

    const elementEncour = document.getElementById(id);

    // On réapplique la condition pour colorer le lien actif du menu, sinon repasse en  gris à cause de la condition plus haute
    if (elementEncour.getAttribute('id') === id)
    {
        if (elementEncour.getAttribute('id') === id)
        {
            if (elementEncour.getAttribute('id') === 'logo' || elementEncour.getAttribute('id') === 'accueil_footer')
            {
                accueil.style.color = '#F7F7F7';
            }
            
            else if(elementEncour.getAttribute('id') === 'catalogue_voiture_footer')
            {
                catalogueVoiture.style.color = '#F7F7FF';
            }

            else if (elementEncour.getAttribute('id') ===  'contact_footer')
            {
                contact.style.color = '#F7F7FF';
            }

            else if (elementEncour.getAttribute('id') === 'info_footer')
            {
                info.style.color = '#F7F7FF';
            }
            
            else
            {
                elementEncour.style.color = '#F7F7FF';
            }
        }
    }
}
