// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const directorArray = array.map((movie) => {
    return movie.director;
  });

  return directorArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const stevensMovies = array.filter((movie) => (movie.director === 'Steven Spielberg'));
  let stevensDramas = 0;
  
  stevensMovies.forEach(movie => {
    const genre = movie.genre;
    genre.filter(film => {
      if(film === 'Drama'){
        stevensDramas++;
      }
    })
  });

  return stevensDramas;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  /// I tried to get this to work with .reduce() but I couldn't work out how to skip the objects with missing scores
  // this is a hot mess :(
  if(movies.length === 0) return 0;

  let total = 0;
  const scoredMovies = movies.filter(movie => {
    if(movie.score === undefined) {
      total += 0
    } else total +=movie.score
    //return movie.score;
  });

  //console.log(scoredMovies);

  return scoredMovies / movies.length;
  //  return scoredMovies.reduce((a, b) => {
  //    console.log(a.score)
  //  })
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaCount = 0;
  let dramaMovies = movies.filter(movie => {
    
    const genres = movie.genre;
   //console.log(genres)
    if(genres.indexOf("Drama") !== -1){
      dramaCount+= movie.score
    }
  });

  console.log(dramaMovies)

  return dramaCount/ dramaMovies.length;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let moviesCopy = [...movies];

  return moviesCopy.sort((a,b) => {
    return a.year - b.year;
  });


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
 const sortedTitles = [...movies].map((movieTitle) => movieTitle.title).sort();

  return sortedTitles.slice(0, 20);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
