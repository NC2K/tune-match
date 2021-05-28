

export function randomNum(category) {
  return Math.floor(Math.random() * category.length);
}

export function indexSelector(category) {
  const songs = [];
  // if newNumber !== anything in songs array, push to songs array
  while (songs.length < 10) {
    let song = randomNum(category);
    if (songs.indexOf(song) === -1) songs.push(song);
  }
  return songs;
}

export function makeQueryList(category) {
  const songSearches = [];
  const numArr = indexSelector(category);

  for (let i = 0; i < numArr.length; i++) {
    songSearches.push(category[numArr[i]]);
  }
  return songSearches;
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

export function checkAnswer(userInput, fetchedSong) {

  const songTitle = fetchedSong.toLowerCase();
  
  //splits song title into an array, implementing regex rule (removes two letter characters and punctuation)
  const matchingTerms = songTitle.split(' ');
  const newTerms = matchingTerms.filter(word => word.length > 2 && !word.includes('.', '!'));
 
  userInput = userInput.toLowerCase();

  //splits user input into an array
  const newInput = userInput.split(' ');

  //compares user input indexes [0-2] with correct answer or exact match
  if (newTerms.includes(newInput[0]) || newTerms.includes(newInput[1]) ||
    newTerms.includes(newInput[2]) || userInput === songTitle)
    return true;
  else
    return false;
}
