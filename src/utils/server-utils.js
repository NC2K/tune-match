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

export async function getPlaylist(songArr) {
  const playlist = await Promise.all(songArr.map(async song => {
    const response = await request
      .get('/api/categories/:search')
      .set('Authorization', window.localStorage.getItem('TOKEN'))
      .query({ search: song });
    return response.body;
  }));
  return playlist.flat();
}
