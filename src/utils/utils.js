export function songPicker(category) {
  return Math.floor(Math.random() * category.length);
}

export function verifySong(category) {
  const songs = [];
  // if newNumber !== anything in songs array, push to songs array
  while (songs.length < 10) {
    let song = songPicker(category);
    if (songs.indexOf(song) === -1) songs.push(song);
  }
  return songs;
}

export function getSongs(numArr, searchArr) {
  const songSearches = [];

  for (let i = 0; i < numArr.length; i++) {
    songSearches.push(searchArr[numArr[i]]);
  }

  return songSearches;
}
