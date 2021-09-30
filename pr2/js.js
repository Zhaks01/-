const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let i=1;
do{
    const a = prompt('Один из последних просмотренных фильмов?'),
    b = prompt('На сколько оцените его?');   

if(a == '' || b == '' || a == null || b == null || a.length > 50) {
  console.log('error');
  i--;      // 
  continue; // 
}
console.log('done');
personalMovieDB.movies[a] = b;
}
while (i<1);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
} else {
        console.log('Произошла ошибка');
}

console.log(personalMovieDB);
