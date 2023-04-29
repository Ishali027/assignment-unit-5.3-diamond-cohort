console.log('***** Music Collection *****')
// - Create a variable `collection` that starts as an empty array.
let collection = [];

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object
function addToCollection(title, artist, yearPublished){
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return album;
}
// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.
console.log(addToCollection('My Turn', 'Lil Baby', 2020));
console.log(addToCollection('The Blueprint', 'Jay-Z', 2001));
console.log(addToCollection('PANDEMIC', 'Ruger', 2021));
console.log(addToCollection('The Voice', 'Lil Durk', 2020));
console.log(addToCollection('Dangerous', 'Morgan Wallen', 2021));
console.log(addToCollection('I Told You', 'Tory Lanez', 2016));
console.log('My album collection:', collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection,
//      like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: 
//   `TITLE by ARTIST, published in YEAR`.

// - Test the `showCollection` function.


// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

// - Test the `findByArtist` function. Make sure to test with an artist 
// you know is in the collection, as well as an artist you know is not in your collection. 
// Check that for artists with multiple matches, all are found.





