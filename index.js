function downloadFile(content, filename) {
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

// Gérer la soumission du formulaire
	document.getElementById('formulaire').addEventListener('submit', function(event) {
    	event.preventDefault(); // Empêche l'envoi classique du formulaire
    
    // Récupérer les données du formulaire

		// Identité
			const prenom = document.getElementById('prenom').value;
			const nom = document.getElementById('nom').value;
			const dateDeNaissance = document.getElementById('date-de-naissance').value;
			const sexe = document.querySelector("#sexe input:checked").value

		// Coordonnées
			const adresseMail = document.getElementById('mail').value;
			const adresse = document.getElementById('adresse').value;
			const codePostal = document.getElementById('code-postal').value;
			const numeroDeTelephone = document.getElementById('numero-de-telephone').value;

		// Autres informations
			const groupeSanguin = document.querySelector('#groupe-sanguin option:checked').value;
			const religion = document.querySelector('#religion option:checked').value;
			const alcoolisme = document.querySelector('#liste-alcoolisme input:checked').value;
			const etreCon = document.querySelector('#liste-etre-con input:checked').value;
			const etrePuceau = document.querySelector('#liste-etre-puceau input:checked').value;
			const taille = document.querySelector('#taille #valeur').value;
			const mdp = document.getElementById('mdp').value;
			const numeroCb = document.getElementById('numero-cb').value;
			const codePinCb = document.getElementById('code-pin-cb').value;
			const pictogrammeCb = document.getElementById('pictogramme-cb').value;
			const dateExpirationCb_Mois = document.querySelector('#date-expiration-cb #mois').value;
			const dateExpirationCb_Annee = document.querySelector('#date-expiration-cb #annee').value;

    // Créer le contenu du fichier texte
		const contenu = 
`==========
Formulaire
==========


Identité
-----------------------
Prénom : ${prenom}
Nom : ${nom}
Date de naissance : ${dateDeNaissance}
Sexe : ${sexe}

Coordonnées
-----------------------
Adresse mail : ${adresseMail}
Adresse : ${adresse}
Code postal : ${codePostal}
Numéro de téléphone : ${numeroDeTelephone}

Autres informations
-----------------------
Groupe sanguin : ${groupeSanguin}
Religion : ${religion}
Vous êtes alcolique : ${alcoolisme}
Vous êtes con : ${etreCon}
Vous êtes puceau : ${etrePuceau}
Taille : ${taille} m
Mots de passe : ${mdp}
Numéro de carte bancaire : ${numeroCb}
Code PIN de carte bancaire : ${codePinCb}
Pictogramme de carte bancaire : ${pictogrammeCb}
Date d'expiration de carte bancaire : ${dateExpirationCb_Mois}/${dateExpirationCb_Annee}`;

    // Télécharger le fichier texte
		downloadFile(contenu, 'formulaire.txt');
});