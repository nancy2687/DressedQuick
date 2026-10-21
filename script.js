const bouton =
        document.getElementById("actualiserMeteo");
		var temperature = document.getElementById("temperature");
		var prevision = document.getElementById("prevision");
		bouton.addEventListener("click", () => {
		console.log("Click détecté");//  code sera exécuté au clic
		//temperature.textContent = "18°c" ;
		navigator.geolocation.getCurrentPosition(
		(position) => {
        console.log(position.coords.latitude);// Les coordonnées seront disponibles ici
		console.log(position.coords.longitude);
		var longitude = position.coords.longitude;
	    var latitude = position.coords.latitude;
		const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code `;
		console.log(url);
		fetch(url)
		.then((reponse) => {
			return reponse.json();
		})
		.then((donnees) => {
			console.log(donnees);
			console.log(donnees.current);
			const codemeteo = donnees.current.weather_code;

if (codemeteo === 0) {
    prevision.textContent = "Ciel dégagé ☀️";
} else if (codemeteo === 1) {
    prevision.textContent = "Principalement dégagé 🌤️";
} else if (codemeteo === 2) {
    prevision.textContent = "Partiellement nuageux ⛅";
} else if (codemeteo === 3) {
    prevision.textContent = "Ciel couvert ☁️";
} else if (codemeteo === 45) {
    prevision.textContent = "Brouillard 🌫️";
} else if (codemeteo === 48) {
    prevision.textContent = "Brouillard givrant 🌫️";
} else if (codemeteo === 51) {
    prevision.textContent = "Bruine légère 🌦️";
} else if (codemeteo === 53) {
    prevision.textContent = "Bruine modérée 🌦️";
} else if (codemeteo === 55) {
    prevision.textContent = "Bruine dense 🌧️";
} else if (codemeteo === 56) {
    prevision.textContent = "Bruine verglaçante légère 🧊";
} else if (codemeteo === 57) {
    prevision.textContent = "Bruine verglaçante dense 🧊";
} else if (codemeteo === 61) {
    prevision.textContent = "Pluie faible 🌧️";
} else if (codemeteo === 63) {
    prevision.textContent = "Pluie modérée 🌧️";
} else if (codemeteo === 65) {
    prevision.textContent = "Forte pluie 🌧️";
} else if (codemeteo === 66) {
    prevision.textContent = "Pluie verglaçante légère 🧊";
} else if (codemeteo === 67) {
    prevision.textContent = "Forte pluie verglaçante 🧊";
} else if (codemeteo === 71) {
    prevision.textContent = "Faibles chutes de neige 🌨️";
} else if (codemeteo === 73) {
    prevision.textContent = "Chutes de neige modérées 🌨️";
} else if (codemeteo === 75) {
    prevision.textContent = "Fortes chutes de neige ❄️";
} else if (codemeteo === 77) {
    prevision.textContent = "Neige en grains ❄️";
} else if (codemeteo === 80) {
    prevision.textContent = "Faibles averses 🌦️";
} else if (codemeteo === 81) {
    prevision.textContent = "Averses modérées 🌧️";
} else if (codemeteo === 82) {
    prevision.textContent = "Fortes averses 🌧️";
} else if (codemeteo === 85) {
    prevision.textContent = "Faibles averses de neige 🌨️";
} else if (codemeteo === 86) {
    prevision.textContent = "Fortes averses de neige 🌨️";
} else if (codemeteo === 95) {
    prevision.textContent = "Orage ⛈️";
} else if (codemeteo === 96) {
    prevision.textContent = "Orage avec grêle ⛈️";
} else if (codemeteo === 99) {
    prevision.textContent = "Orage avec forte grêle ⛈️";
} else {
    prevision.textContent = "Météo inconnue";
}
			
			
			temperature.textContent = donnees.current.temperature_2m + " °C";
		});
    },
		(erreur) => {
        var ville = document.getElementById("ville");// Refus ou echec de la localisation -> ville renseigner manuellement
		console.log(ville.value);
		const url=`https://geocoding-api.open-meteo.com/v1/search?name=${ville.value}&count=1&language=fr&format=json`;
		console.log(url);
		fetch(url)
		.then((reponse) => {
			return reponse.json();
		})
		.then((donnees) => {
			console.log(donnees);
			console.log(donnees.results[0]);
			var longitude =donnees.results[0].longitude
	        var latitude = donnees.results[0].latitude;
			const urlmeteo = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code `;
			console.log(urlmeteo);
			fetch(urlmeteo)
			.then((reponse) => {
				return reponse.json();
		})
			.then((donnees) => {
				console.log(donnees);
			console.log(donnees.current);
			const codemeteo = donnees.current.weather_code;

if (codemeteo === 0) {
    prevision.textContent = "Ciel dégagé ☀️";
} else if (codemeteo === 1) {
    prevision.textContent = "Principalement dégagé 🌤️";
} else if (codemeteo === 2) {
    prevision.textContent = "Partiellement nuageux ⛅";
} else if (codemeteo === 3) {
    prevision.textContent = "Ciel couvert ☁️";
} else if (codemeteo === 45) {
    prevision.textContent = "Brouillard 🌫️";
} else if (codemeteo === 48) {
    prevision.textContent = "Brouillard givrant 🌫️";
} else if (codemeteo === 51) {
    prevision.textContent = "Bruine légère 🌦️";
} else if (codemeteo === 53) {
    prevision.textContent = "Bruine modérée 🌦️";
} else if (codemeteo === 55) {
    prevision.textContent = "Bruine dense 🌧️";
} else if (codemeteo === 56) {
    prevision.textContent = "Bruine verglaçante légère 🧊";
} else if (codemeteo === 57) {
    prevision.textContent = "Bruine verglaçante dense 🧊";
} else if (codemeteo === 61) {
    prevision.textContent = "Pluie faible 🌧️";
} else if (codemeteo === 63) {
    prevision.textContent = "Pluie modérée 🌧️";
} else if (codemeteo === 65) {
    prevision.textContent = "Forte pluie 🌧️";
} else if (codemeteo === 66) {
    prevision.textContent = "Pluie verglaçante légère 🧊";
} else if (codemeteo === 67) {
    prevision.textContent = "Forte pluie verglaçante 🧊";
} else if (codemeteo === 71) {
    prevision.textContent = "Faibles chutes de neige 🌨️";
} else if (codemeteo === 73) {
    prevision.textContent = "Chutes de neige modérées 🌨️";
} else if (codemeteo === 75) {
    prevision.textContent = "Fortes chutes de neige ❄️";
} else if (codemeteo === 77) {
    prevision.textContent = "Neige en grains ❄️";
} else if (codemeteo === 80) {
    prevision.textContent = "Faibles averses 🌦️";
} else if (codemeteo === 81) {
    prevision.textContent = "Averses modérées 🌧️";
} else if (codemeteo === 82) {
    prevision.textContent = "Fortes averses 🌧️";
} else if (codemeteo === 85) {
    prevision.textContent = "Faibles averses de neige 🌨️";
} else if (codemeteo === 86) {
    prevision.textContent = "Fortes averses de neige 🌨️";
} else if (codemeteo === 95) {
    prevision.textContent = "Orage ⛈️";
} else if (codemeteo === 96) {
    prevision.textContent = "Orage avec grêle ⛈️";
} else if (codemeteo === 99) {
    prevision.textContent = "Orage avec forte grêle ⛈️";
} else {
    prevision.textContent = "Météo inconnue";
}
			
			
				temperature.textContent = donnees.current.temperature_2m + " °C";
			});
		});
	
		
    }
);
});



fetch("vetement.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Impossible de charger les vêtements");
        }
        return response.json();
    })
    .then(vetements => {
        console.log("Vêtements chargés :", vetements);

        // On récupère la garde-robe dans le HTML
        const gardeRobe = document.getElementById("garde-robe");

        // On affiche chaque vêtement
        vetements.forEach(vetement => {
            const carte = document.createElement("article");
            carte.classList.add("carte-vetement");

            // Photo du vêtement
            const photo = document.createElement("img");
            photo.src = vetement.photo;
            photo.alt = vetement.type || "Vêtement";

            // Informations du vêtement
            const informations = document.createElement("div");
            informations.classList.add("informations-vetement");

            const titre = document.createElement("h3");
            titre.textContent = vetement.type || "Vêtement sans nom";

            const marque = document.createElement("p");
            marque.textContent = "Marque : " + (vetement.marque || "Non précisée");

            const taille = document.createElement("p");
            taille.textContent = "Taille : " + (vetement.taille || "Non précisée");

            // On ajoute les éléments à la carte
            informations.appendChild(titre);
            informations.appendChild(marque);
            informations.appendChild(taille);

            carte.appendChild(photo);
            carte.appendChild(informations);

            // On ajoute la carte à la garde-robe
            gardeRobe.appendChild(carte);
        });
    })
    .catch(erreur => {
        console.error("Erreur :", erreur);
    });




const aujourdHui = new Date();
const mois = aujourdHui.getMonth();