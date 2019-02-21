const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// 1 Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70

let seventweetard = []
entrepreneurs.forEach(one => {

let birth = one.year
// console.log(birth)
  if (1970 <= birth && birth <= 1979) {
    seventweetard.push(one) 
  }
});

console.log("voici la liste des soixantedixard : ")
console.log(seventweetard)


// 2 Sors une array qui combien le prénom et le nom des entrepreneurs

let name_array = [];

entrepreneurs.forEach(one => {

let combination
combination = (one.first + " " + one.last)
  name_array.push(combination)
});

console.log("voici l'array des nom/prenom' : ")
console.log(name_array)

// 3 Quel âge aurait chaque inventeur aujourd hui ?

entrepreneurs.forEach(one => {

let age_now = 2018 - one.year
one["today age"] = age_now

});

console.log("si tu regarde bien il y a une nouvelle entré dans l'array")
console.log(entrepreneurs)










// 4 Trie les inventeurs par ordre alphabétique du nom de famille
