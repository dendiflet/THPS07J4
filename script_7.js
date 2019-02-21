const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


// Est-ce que tous les livres ont été au moins empruntés une fois ?

let books_who_never_have_been_rented = 0

books.forEach(one => {
	if (one.rented === 0) { books_who_never_have_been_rented++}
});



if (books_who_never_have_been_rented == 0) {
console.log(`tout les livres on été emprunter au moins une fois`)
}
else {
	console.log(`il y a ${books_who_never_have_been_rented} livres qui n'ont jamais été emprunté`)
}


// Quel est livre le plus emprunté ?

let var_to_see_wich_book_have_been_the_most_rented = 0
let title_of_the_most_rented_book = ""
books.forEach(one => {
	if (one.rented > var_to_see_wich_book_have_been_the_most_rented) {
		title_of_the_most_rented_book = one.title
	}
});

console.log("voila le titre du livre le plus emprunté : ")
console.log(title_of_the_most_rented_book)


// Quel est le livre le moins emprunté ?

let var_to_see_wich_book_havent_been_the_most_rented = 0
let title_of_the_most_unrented_book = ""
books.forEach(one => {
	if (var_to_see_wich_book_havent_been_the_most_rented - one.rented > 0 || var_to_see_wich_book_havent_been_the_most_rented == 0) {
var_to_see_wich_book_havent_been_the_most_rented = one.rented
		title_of_the_most_unrented_book = one.title;
	}
});

console.log("voila le titre du livre le moins emprunté : ")
console.log(title_of_the_most_unrented_book)


// Trouve le livre avec l'ID: 873495
// Supprime le livre avec l'ID: 133712
// Trie les livres par ordre alphabétique