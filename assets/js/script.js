const html = document.getElementsByTagName('html');
const body = document.getElementsByTagName('body');

//////////////////////
// 		HEADER		//

// id prend la valeur 'accueil' car element charger en premier en arrivant sur le site
let id = 'accueil';

// MENU LINKS
const logo = document.getElementById('logo');
const accueil = document.getElementById('accueil');
const catalogueVoiture = document.getElementById('catalogue_voiture');
const contact = document.getElementById('contact');
const info = document.getElementById('info');

const lumiereAccueil = document.getElementById('lumiere_accueil');
const lumiereCatalogueVoiture = document.getElementById('lumiere_catalogue_voiture');
const lumiereContact = document.getElementById('lumiere_contact');
const lumiereInfo = document.getElementById('lumiere_info');


//////////////////////
// 		FOOTER		//

// FOOTER LINKS
const footer = document.getElementById('footer');
const accueilFooter = document.getElementById('accueil_footer');
const catalogueVoitureFooter = document.getElementById('catalogue_voiture_footer');
const contactFooter = document.getElementById('contact_footer');
const infoFooter = document.getElementById('info_footer');



//////////////////////
// 		EVENTS		//

// évènement pour charger la page lors du clique sur liens du menu
logo.addEventListener('click', loadPage);
accueil.addEventListener('click', loadPage);
catalogueVoiture.addEventListener('click', loadPage);
contact.addEventListener('click', loadPage);
info.addEventListener('click', loadPage);

//////////////////////////////////////////////////////

// évènement pour charger la page lors du clique sur liens du footer
accueilFooter.addEventListener('click', loadPage);
catalogueVoitureFooter.addEventListener('click', loadPage);
contactFooter.addEventListener('click', loadPage);
infoFooter.addEventListener('click', loadPage);

//////////////////////////////////////////////////////

// évènement pour colorer le lien du menu de la page active lors du clique sur les liens du menu
logo.addEventListener('click', colorMenu);
accueil.addEventListener('click', colorMenu);
catalogueVoiture.addEventListener('click', colorMenu);
contact.addEventListener('click', colorMenu);
info.addEventListener('click', colorMenu);

//////////////////////////////////////////////////////

// évènement pour colorer le lien du menu de la page active lors du clique sur les liens du footer
accueilFooter.addEventListener('click', colorMenu);
catalogueVoitureFooter.addEventListener('click', colorMenu);
contactFooter.addEventListener('click', colorMenu);
infoFooter.addEventListener('click', colorMenu);

//////////////////////////////////////////////////////

// évènement pour rappeler la fonction colorMenu() lors du redimenssionnement de fênetre
window.addEventListener('resize', colorMenu); // Permet de conserver la couleur du lien de la page active lors du redimenssionnement
window.addEventListener('onload', colorMenu());


//////////////////////
// 		ACCUEIL		//

// diapo image
let imagePubArray = new Array(); 		
imagePubArray[0] = 'assets/img/diapo/pneus.png'; 	
imagePubArray[1] = 'assets/img/diapo/revision.png';
imagePubArray[2] = 'assets/img/diapo/clim.png';

let i = 0;
const timer = 3000;
const resetTime = 'diapoImagePub()';

const intervalChangeImage = setInterval(resetTime, timer); 
// setInterval pour afficher les images suivantes toutes les 5 secondes
// Placé en dehors de la fonction car sinon intervalChangeImage s'incrémente de 10 en 10 à chaque changement d'onglet et impact sur diapo qui s'exécute de plus en plus vite
//  Ne va pas au delà de la 2è image avec setTimeout() car intervalChangeImage est egale à 2


//////////////////////
// 		CONTACT		//

// input style valid / invalid
const borderDefault = '1px #C03221 solid';
const borderValid = '2px green solid';
const borderInvalid = '2px red solid';


/////////////////////
// 		INFO	   //

const modal = document.createElement('div');
modal.setAttribute('id', 'modal');

const popup = document.createElement('div');
popup.setAttribute('id', 'popup');

const close = document.createElement('div');
close.setAttribute('id', 'close');
close.setAttribute('onclick', 'modalClose()');
close.innerHTML = '&times;';

const text = document.createElement('div');
text.setAttribute('id', 'text');
text.innerText = 'L\'adresse a été copier';


//////////////////////
// 		WINDOW		//

// Evènement
window.addEventListener('resize', checkWindow);
							
let width = window.innerWidth;
let height = window.innerHeight;
