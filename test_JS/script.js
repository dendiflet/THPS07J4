/*commentaire
console.log("coucou depuis la console");

// commentaire sur une ligne

 sur
  plusieurs lignes 


  let data1 = "variable en let définie dans le bloc principal";

{ //début du sous-bloc

data1 = "variable data1 en let modifiée dans le sous-bloc";
  var data2 = "variable data2 en var définie dans le sous-bloc";
  let data3 = "variable data3 en let définie dans le sous-bloc";

} //fin du sous-bloc

console.log(data1); // "variable let modifiée dans le sous-bloc"
console.log(data2); // "variable var définie dans le sous-bloc"

let a = 1;
let b = 1;
b++;
console.log(a);
console.log(b);

console.log(b *= 5);

let c = "Bonjour", d = "Monde";
console.log(c + " " + d);

let statusDeTHP = ["Moussaillon", "Corsaire", "Renégat"];

console.log(statusDeTHP[0])
console.log(statusDeTHP.length)
statusDeTHP[0] = "La moussaille";
console.log(statusDeTHP[0])
statusDeTHP.push("Flibustier")
console.log(statusDeTHP.length)
statusDeTHP.unshift("Pirate")
console.log(statusDeTHP)
console.log(statusDeTHP.length)


let a = 3;
  console.log("Bonjour à tous les "+ a);
  console.log(a + "3");

let numStudent = 4;
let statement = `Dans mon groupe on est ${numStudent} moussaillons`;
console.log(statement);

console.log()
console.log()
console.log()


let THPSessionNum2 = {
  numOfMouss: 80,
  cities: ["Paris", "Lyon", "Montpellier"],
  successRate: 0.80,
  sessionMoto: "keep pushing to the top"
};

console.log(THPSessionNum2.numOfMouss);
console.log(THPSessionNum2.sessionMoto);

console.log(THPSessionNum2.cities[2]);


THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
console.log(THPSessionNum2.numOfMouss);
THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
console.log(THPSessionNum2); //j'imprime tout l'objet pour voir

attributName = "successRate";
console.log(THPSessionNum2[attributName]);



let number = -1; //fais ensuite le test avec d'autres valeurs (positives et négatives)
if(number > 0) {
  console.log("number est positif");
} else if(number === 0) {
  console.log("number est nul");
} else {
  console.log("number est négatif");
}

*/

let number = 0; //fais aussi le test avec un chiffre non nul
if (number) {
  console.log("ce message ne s'affiche que si number est non nul ");
}

let string = ""; //fais aussi le test avec un mot non vide
if (string) {
  console.log("ce message ne s'affiche que si string est non vide");
}

let myVariable // ici, myVariable sera undefined. Fais aussi le test en lui donnant une valeur: number, string, array ou autre.
if (myVariable) {
  console.log("ce message ne s'affiche que si myVariable contient une valeur ");
}
































































































