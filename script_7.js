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

let array_for_one_particular_book = []
books.forEach(one => {
	if (one.id == 873495) {
		array_for_one_particular_book.push(one)
	}
});

console.log("voila le livre avec l'id 873495 : ")
console.log(array_for_one_particular_book)


// Trie les livres par ordre alphabétique

books.sort(function(a, b){
  var x = a.title.toLowerCase();
  var y = b.title.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});

console.log("voici les livres rangé dans l'ordre alpha : ")
console.log(books)


// Supprime le livre avec l'ID: 133712

let nb_of_books = books.length
let id_of_the_book_to_delete

for(let count=0; count<= nb_of_books-1; count++) {
	let one = books[count]
	if (one.id == 133712) {
		id_of_the_book_to_delete = count
	}
}

console.log(id_of_the_book_to_delete)
books[id_of_the_book_to_delete] = 0

console.log("voila le livre avec l'id 133712 a disparut : ")
console.log(books)





















