const langue = document.getElementById("langue");

console.log("Menu trouvé :", langue);

langue.addEventListener("change", function() {
    const choix = langue.value;

    console.log("Langue choisie :", choix);

    if (choix === "fr") {
        window.location.href = "français.html";
    }else if (choix =="de"){
		window.location.href = "allemand.html";
	}else if (choix =="es"){
		window.location.href ="espagnol.html";
	}else if (choix =="en"){
		window.location.href ="anglais.html";
	}else if (choix =="ch"){
		window.location.href ="chinois.html";
	}//else if (choix =="
});