
// better to limit the inputs to only what the function needs
export function randomNum(length) {
  return Math.floor(Math.random() * length);
}

// better to make this more deterministic...
export function indexSelector(category) {
  const songs = [];
  
  // create an array of all the indices
  const indices = category.map((x, i) => i);
  
  while (indices.length) {
    // random index in the range of remaining numbers
    const random = randomNum(indices.length);
    // add the corresponding original index
    songs.push(indices[random]);
    // remove that one from the available list
    indices.splice(random, 1);
  }
  return songs;
}

export function makeQueryList(category) {
  const randomOrder = indexSelector(category);
  // this is a map!
  return randomOrder.map(index => category[index]);
}

export function getSongFromStorage() {
  const storedSongs = localStorage.getItem('SONGSDATA');
  const receivedSongs = JSON.parse(storedSongs);

  if (receivedSongs) {
    return receivedSongs;
  } else {
    return [];
  }
}

export function setSong(receivedSongs) {
  const storedSongs = JSON.stringify(receivedSongs);
  localStorage.setItem('SONGSDATA', storedSongs);
}

export function addSongToStorage(newSong) {
  const storedSongs = getSongFromStorage();
  storedSongs.push(newSong);
  setSong(storedSongs);
}

function getTerms(text) {
  return text
    .toLowerCase()
    .split(' ')
    .filter(word => word.length > 2)
    // maybe remove the "." and "!" from the words, instead of omitting the words
    // \W = Any non word character
    .map(word => word.replace(/\W/g, ''));
}

export function checkAnswer(userInput, fetchedSong) {

  userInput = userInput.toLowerCase();
  fetchedSong = fetchedSong.toLowerCase();

  const songTerms = getTerms(fetchedSong);
  const userTerms = getTerms(userInput);

  // compares user input indexes [0-2] with correct answer or exact match
  // no need to use an if/else that returns true or false, just return the condition...
  return newTerms.includes(newInput[0]) 
    || newTerms.includes(newInput[1]) 
    || newTerms.includes(newInput[2]) 
    || userInput === songTitle;
   
}
