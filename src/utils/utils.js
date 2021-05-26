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
