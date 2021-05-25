import request from 'superagent';

export async function logIn(user) {
  const response = await request
    .post('/api/auth/signin')
    .ok(res => res.status < 500)
    .send(user);

  if (response.status === 400) throw response.body;

  return response.body;
}

export async function signUp(user) {
  const response = await request
    .post('/api/auth/signup')
    .ok(res => res.status < 500)
    .send(user);

  if (response.status === 400) throw response.body;

  return response.body;
}

// export async function getPlaylist(categoryArray) {
//   let playListArray = [];

//   //for each element in the array, get the response body
//   categoryArray.map(song => {
//     const response = await request
//       .get('/api/categories/:search')
//       .set('Authorization', window.localStorage.getItem('TOKEN'))
//       .query({ search: categoryArray[song] });

//     //put the response body in a new array
//     playListArray.push(response.body);
//   });

//   //return new array
//   return playListArray;
// }

export async function getPlaylist(songArr) {
  const playListArray = [];
  console.log(songArr);
  //for each element in the array, get the response body
  for (let song of songArr) {
    const response = await request
      .get('/api/categories/:search')
      .set('Authorization', window.localStorage.getItem('TOKEN'))
      .query({ search: songArr[song] });
    //put the response body in a new array
    playListArray.push(response.body);
  }
  //return new array
  return playListArray;
}
