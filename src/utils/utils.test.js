import {
  songPicker,
  verifySong,
  getSongs
} from '../utils/utils.js';

describe('song selection functions', () => {

  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const number1 = songPicker(input);
  const number2 = songPicker(input);
  const number3 = songPicker(input);
  const number4 = songPicker(input);
  const number5 = songPicker(input);

  test('Generate a random number, limited by array length', () => {

    let output = false;

    console.log(number1, number2, number3, number4, number5);

    if (number1 < 15 && number2 < 15 && number3 < 15 && number4 < 15 && number5 < 15) {
      output = true;
    }

    expect(output).toEqual(true);
  });

  test('Makes an array of 10 unique numbers', () => {
    let output = true;

    const songArray = verifySong(input);

    console.log(songArray);

    const dupCheck = [...songArray].sort();

    for (let i = 0; i < dupCheck.length; i++) {
      if (dupCheck[i + 1] === dupCheck[i]) {
        return output = false;
      }
    }

    expect(output).toEqual(true);
  });

  test('Makes a list of 10 songs queries', () => {
    const songs = [
      'Rudolph,+The+Red-nosed+Reindeer+Gene+Autry',
      'I+Can+Dream,+Can\'t+I+The+Andrew+Sisters',
      'Music!+Music!+Music!+Teresa+Brewer',
      'Mona+Lisa+Nat+King+Cole',
      'Harbor+Lights+Sammy+Kaye',
      'Mr.+Sandman+The+Chordettes',
      'Heartbreak+Hotel+Elvis+Presley',
      'Tequila+The+Champs',
      'Witch+Doctor+David+Seville',
      'The+Purple+People+Eater+Sheb+Wooley',
      'The+Ballad+of+Davy+Crockett+Bill+Hayes',
      'Cherry+Pink+And+Apple+Blossom+White+Perez+Prado',
      'Libson+Antigua+Nelson+Riddle',
      'Hound+Dog+Elvis+Presley',
    ];

    const numArr = verifySong(songs);

    const songList = getSongs(numArr, songs);

    console.log(songList);

    let output = false;

    if (songList.length === 10) {
      output = true;
    }

    expect(output).toEqual(true);
  });

});