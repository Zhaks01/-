const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
/* Плюс позволяет конвертировать строку в число */

/* объект personalMovieDB */
const MovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
private: false
};

const a = prompt("Один из последних просмотренных фильмов?"),
b = prompt("На сколько оцените его?"),
c = prompt("Один из последних просмотренных фильмов?"),
d = prompt("На сколько оцените его?");

//Добавление свойств в объект через квадратные скобки
MovieDB.movies[a] = b;
MovieDB.movies[c] = d;

console.log(MovieDB);
