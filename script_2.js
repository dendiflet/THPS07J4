/*
Créé un script script_2.js qui définira la fonction factorielle et qui calculera la factorielle du nombre entré par l'utilisateur. Petit exemple rapide : factorielle(5) = 5*4*3*2*1 et factorielle(10) = 10*9*8*7*6*5*4*3*2*1

Voici ce que dois faire le script :

// Un prompt s'affiche avec la question suivante
"De quel nombre veut tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
"Le résultat est : 24"

*/

nb_imputed_by_user = prompt("entre un nombre a factorieller stp")

nb_sized = Number(nb_imputed_by_user)
//console.log(nb_sized)

if(nb_sized > 0) {
  console.log("number est positif");
} else if(number === 0) {
  console.log("number est nul");
} else {
  console.log("number est négatif");
}

//console.log(`nb_sized = ${nb_sized}`)

let factorielle = nb_sized;
//console.log(`factorielle : ${factorielle}`);

for(let count = 1; count <= nb_sized - 1; count++){
//	console.log(`on va compter jusqu'à 5 : ${count}`);
	factorielle = factorielle * count;
//  console.log(`voici le valeur de facto actuelle : ${factorielle}`);
};

console.log(factorielle);
