/* Ah la pyramide de Mario du pré-parcours. Que de bons souvenirs. Tu vas écrire un script appelé script_3.js

Voici ce que devra afficher la console

"Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
  // Utilisateur rentre un nombre (par ex 5)
    #
   ##
  ###
 ####
#####
*/



nb_imputed_by_user = prompt("nb d'étage de la pyramide stp")
nb_sized = Number(nb_imputed_by_user)

if(nb_sized > 0) {
  console.log("number est positif");
} else if(number === 0) {
  console.log("number est nul");
} else {
  console.log("number est négatif");
}

//declaration des fonctions
let stages = nb_sized
let line_spaces, line_A;



//création d'une fonctione ligne
function line(actual_stage) { 
	line_spaces = "" ; 
	line_A = "";
	for(let count = 1; count <=  stages - actual_stage; count++) {
		line_spaces = line_spaces + "@"
	}
	for(let count = 1; count <= actual_stage; count++) {
		line_A = line_A + "#"
	}
	console.log(line_spaces + line_A)
}

//appel de la fonction ligne dans une boucle pour chaque étages
for(let count = 1; count <= stages; count++) {
	line(count)
}

