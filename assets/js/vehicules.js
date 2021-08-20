//////////////////////////////////////////////////////
//			VEHICULES		    //

//Crée constructeur Vehicule en prenant en paramètre les arguments ci dessous (marque, modele, ...)
function Vehicules(marque, modele, anneesModele, kilometrage, carburant, puissanceFiscale, boiteVitesse, nbPortes, couleur, nbPlaces, prixVente)
{
    this.marque = marque;
    this.modele = modele;
    this.anneesModele = anneesModele;
    this.kilometrage = kilometrage;
    this.carburant = carburant;
    this.puissanceFiscale = puissanceFiscale;
    this.boiteVitesse = boiteVitesse;
    this.nbPortes = nbPortes;
    this.couleur = couleur;
    this.nbPlaces = nbPlaces;
    this.prixVente = prixVente;
}

//////////////////////////////////////////////////////

// Ajouter un nouvelle objet à notre constructor
const audiA3 = new Vehicules('Audi', 'A3', 2013, '91 000', 'Diesel', 5, 'Manuelle', 5, 'Gris', 5, '11 000'); 
const mercedesA45 = new Vehicules('Mercedes', 'A45', 2016, '41 500', 'Essence', 20, 'Automatique', 5, 'Noir', 5, '28 000'); 
const golf7 = new Vehicules('Volkswagen', 'Golf 7R', 2015, '67 758', 'Essence', 13, 'Automatique', 3, 'Noir', 5, '25 000');
const alphaGiulietta = new Vehicules('Alpha Romeo', 'Giulietta', 2017, '77 648', 'Diesel', 9, 'Automatique', 3, 'Blanc', 5, '13 500');
const mercedesC220 = new Vehicules('Mercedes', 'C220', 2010, '205 000', 'Diesel', 5, 'Manuelle', 5, 'Noir', 5, '6 900');
const renautlClioIV = new Vehicules('Renault', 'Clio IV', 2014, '187 700', 'Diesel', 4, 'Manuelle', 3, 'Blanc', 3, '5 300');

//////////////////////////////////////////////////////

const photoArray = ['assets/img/voitures/audi_a3.png', 'assets/img/voitures/classe_a.png', 'assets/img/voitures/golf_7.png', 'assets/img/voitures/giulietta.png', 'assets/img/voitures/classe_c.png', 'assets/img/voitures/clio_IV.png'];
const designationVehiculeArray = ['Audi A3', 'Mercedes A45', 'Golf 7R', 'Alpha - Giulietta', 'Mercedes C220', 'Renault Clio IV'];
const argumentArray = ['Marque', 'Modèle', 'Année', 'Kilométrage', 'Carburant', 'Puissance fiscale', 'Boite de vitesse', 'Nombre de portes', 'Couleur', 'Nombre de places', 'Prix'];


//////////////////////////////////////////////////////
//		    CHARGE PHOTO		    //

function chargePhoto()
{	
	for (let i = 0; i < photoArray.length; i++)
	{
		const containerCatalogue = document.getElementById('container_catalogue');

		const voiture = document.createElement('div');
		voiture.setAttribute('id', 'voiture');

		const photo = document.createElement('div');
		photo.setAttribute('id', 'photo');

		const infoVehicule = document.createElement('div');
		infoVehicule.setAttribute('id', 'info_vehicule');

		const nomVehicule = document.createElement('span');
		nomVehicule.setAttribute('id', 'nom_vehicule');

		const caracteristiques = document.createElement('div');
		caracteristiques.setAttribute('id', 'caracteristiques');

		const image = document.createElement('img');

		////////////////////////////////////////////////////////////////////////////

		containerCatalogue.appendChild(voiture);
		voiture.appendChild(nomVehicule);
    	voiture.appendChild(photo);
		photo.appendChild(image);
		voiture.appendChild(infoVehicule);
		infoVehicule.appendChild(caracteristiques);
        
		image.setAttribute('src', photoArray[i]);
		nomVehicule.innerHTML = designationVehiculeArray[i];

		////////////////////////////////////////////////////////////////////////////

		for (let y = 0; y < 1; y++) // Pour chaques images (y fera un seul tour de boucle pour chaque images sinon affiche 66 arguments (11 x 6) par image (66 x 6) )
		{
		    for (let x = 0; x < argumentArray.length; x++)  // argumentArray est défini pour cette boucle. x défini l'argument (11 aux total)
		    { 
				const containerCaract = document.createElement('div');
				caracteristiques.appendChild(containerCaract);

				const arg = document.createElement('span');
				const spanCaract = document.createElement('span'); // On crée élément span pour y insérer 1 argument par span (total 11 span par image car 11 argument)


				// Condition pour ne pas implanter de span arg dans le dernier element de caracteristiques (on ne veux pas afficher 'Prix' mais juste la somme (spanCaract))
				if (x === 10) 
				{
					containerCaract.appendChild(spanCaract);   // On implante dans DOM
				}

				else 
				{
					containerCaract.appendChild(arg);
					containerCaract.appendChild(spanCaract);   // On implante dans DOM
				}

				const km = ' KM';
				const cv = ' cv';
				const porte = ' portes';
				const place = ' places';
				const prix = ' €';

				if (i === 0)  // Si i = 0 (i represente le compteur du tableau photoArray) -> 0 = audiA3
				{
					if (x === 0) // Modèle (Si x = 0) 0 -> argument[0] = 'marque'
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = audiA3.marque;
					}

					else if (x === 1) // Marque
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = audiA3.modele;
					}

					else if (x === 2) // Année Modèle
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = audiA3.anneesModele;
					}

					else if (x === 3) // Kilométrage
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = audiA3.kilometrage + km;
					}

					else if (x === 4) // Carburant
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = audiA3.carburant;
					}

					else if (x === 5) // Puissance Fiscale
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = audiA3.puissanceFiscale + cv;
					}

					else if (x === 6) // Boite Vitesse
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = audiA3.boiteVitesse;
					}

					else if (x === 7) // Nombre Portes
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = audiA3.nbPortes + porte;
					}

					else if (x === 8) // Couleur
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = audiA3.couleur;
					}

					else if (x === 9) // Nombre Places
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = audiA3.nbPlaces + place;
					}

					else if (x === 10) // Prix de Vente
					{
						spanCaract.innerHTML = audiA3.prixVente + prix;
					}
				}

				////////////////////////////////////////////////////////////////////////////

				else if (i === 1) // A45
				{
					if (x === 0) // Modèle
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesA45.marque;
					}

					else if (x === 1) // Marque
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesA45.modele;
					}

					else if (x === 2) // Année Modèle
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesA45.anneesModele;
					}

					else if (x === 3) // Kilométrage
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesA45.kilometrage + km;
					}

					else if (x === 4) // Carburant
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesA45.carburant;
					}

					else if (x === 5) // Puissance Fiscale
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesA45.puissanceFiscale + cv;
					}

					else if (x === 6) // Boite Vitesse
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesA45.boiteVitesse;
					}

					else if (x === 7) // Nombre Portes
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesA45.nbPortes + porte;
					}

					else if (x === 8) // Couleur
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesA45.couleur;
					}

					else if (x === 9) // Nombre Places
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesA45.nbPlaces + place;
					}

					else if (x === 10) // Prix de Vente
					{
						spanCaract.innerHTML = mercedesA45.prixVente + prix;
					}
				}

				////////////////////////////////////////////////////////////////////////////

				else if (i === 2) // Golf 7R
				{
					if (x === 0) // Modèle
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = golf7.marque;
					}

					else if (x === 1) // Marque
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = golf7.modele;
					}

					else if (x === 2) // Année Modèle
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = golf7.anneesModele;
					}

					else if (x === 3) // Kilométrage
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = golf7.kilometrage + km;
					}

					else if (x === 4) // Carburant
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = golf7.carburant;
					}

					else if (x === 5) // Puissance Fiscale
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = golf7.puissanceFiscale + cv;
					}

					else if (x === 6) // Boite Vitesse
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = golf7.boiteVitesse;
					}

					else if (x === 7) // Nombre Portes
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = golf7.nbPortes + porte;
					}

					else if (x === 8) // Couleur
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = golf7.couleur;
					}

					else if (x === 9) // Nombre Places
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = golf7.nbPlaces + place;
					}

					else if (x === 10) // Prix de Vente
					{
						spanCaract.innerHTML = golf7.prixVente + prix;
					}
				}

				////////////////////////////////////////////////////////////////////////////

				else if (i === 3) // Alpha Giulietta
				{
					if (x === 0) // Modèle
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = alphaGiulietta.marque;
					}

					else if (x === 1) // Marque
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = alphaGiulietta.modele;
					}

					else if (x === 2) // Année Modèle
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = alphaGiulietta.anneesModele;
					}

					else if (x === 3) // Kilométrage
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = alphaGiulietta.kilometrage + km;
					}

					else if (x === 4) // Carburant
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = alphaGiulietta.carburant;
					}

					else if (x === 5) // Puissance Fiscale
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = alphaGiulietta.puissanceFiscale + cv;
					}

					else if (x === 6) // Boite Vitesse
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = alphaGiulietta.boiteVitesse;
					}

					else if (x === 7) // Nombre Portes
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = alphaGiulietta.nbPortes + porte;
					}

					else if (x === 8) // Couleur
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = alphaGiulietta.couleur;
					}

					else if (x === 9) // Nombre Places
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = alphaGiulietta.nbPlaces + place;
					}

					else if (x === 10) // Prix de Vente
					{
						spanCaract.innerHTML = alphaGiulietta.prixVente + prix;
					}
				}

				////////////////////////////////////////////////////////////////////////////

				else if (i === 4) // C220
				{
					if (x === 0) // Modèle
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesC220.marque;
					}

					else if (x === 1) // Marque
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesC220.modele;
					}

					else if (x === 2) // Année Modèle
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesC220.anneesModele;
					}

					else if (x === 3) // Kilométrage
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesC220.kilometrage + km;
					}

					else if (x === 4) // Carburant
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesC220.carburant;
					}

					else if (x === 5) // Puissance Fiscale
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesC220.puissanceFiscale + cv;
					}

					else if (x === 6) // Boite Vitesse
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesC220.boiteVitesse;
					}

					else if (x === 7) // Nombre Portes
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesC220.nbPortes + porte;
					}

					else if (x === 8) // Couleur
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesC220.couleur;
					}

					else if (x === 9) // Nombre Places
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = mercedesC220.nbPlaces + place;
					}

					else if (x === 10) // Prix de Vente
					{
						spanCaract.innerHTML = mercedesC220.prixVente + prix;
					}
				}

				////////////////////////////////////////////////////////////////////////////

				else if (i === 5) // ClioIV
				{
					if (x === 0) // Modèle
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = renautlClioIV.marque;
					}

					else if (x === 1) // Marque
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = renautlClioIV.modele;
					}

					else if (x === 2) // Année Modèle
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = renautlClioIV.anneesModele;
					}

					else if (x === 3) // Kilométrage
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = renautlClioIV.kilometrage + km;
					}

					else if (x === 4) // Carburant
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = renautlClioIV.carburant;
					}

					else if (x === 5) // Puissance Fiscale
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = renautlClioIV.puissanceFiscale + cv;
					}

					else if (x === 6) // Boite Vitesse
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = renautlClioIV.boiteVitesse;
					}

					else if (x === 7) // Nombre Portes
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = renautlClioIV.nbPortes + porte;
					}

					else if (x === 8) // Couleur
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = renautlClioIV.couleur;
					}

					else if (x === 9) // Nombre Places
					{
						arg.innerHTML = argumentArray[x];
						spanCaract.innerHTML = renautlClioIV.nbPlaces + place;
					}

					else if (x === 10) // Prix de Vente
					{
						spanCaract.innerHTML = renautlClioIV.prixVente + prix;
					}
				}
			}
		}
	}
}
