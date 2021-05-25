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