const NumberofFilms = +prompt("How many films did you watch?", "");
const PersonaDB = {
  count: NumberofFilms,
  movies: {},
  actors: {},
  genre: [],
  privat: false,
};

const a = prompt("Last wached movie?", ""),
  b = prompt("Rated it, please", ""),
  c = prompt("Last wached movie?", ""),
  d = prompt("Rated it, please", "");

PersonaDB.movies[a] = b;
PersonaDB.movies[c] = d;

console.log(PersonaDB);
