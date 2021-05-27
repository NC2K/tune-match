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

export async function getSong(songArr, counter) {
  console.log('SONGARR:', songArr[counter], counter);
  const playlist = await request
    .get('/api/categories/:search')
    .set('Authorization', window.localStorage.getItem('TOKEN'))
    .query({ search: songArr[counter] });

  return playlist.body;
}

export async function getScores() {
  const response = await request
    .get('/api/scores')
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}

export async function postScores(score) {
  const response = await request
    .post('/api/scores')
    .ok(res => res.status < 500)
    .set('Authorization', window.localStorage.getItem('TOKEN'))
    .send(score);

  return response.body;
}

export async function putScores(score) {
  const parsedGameId = JSON.parse(localStorage.getItem('GAMEID'));
  const parsedCategory = JSON.parse(localStorage.getItem('CATEGORY'));
  const response = await request
    .put(`/api/scores/${parsedGameId}`)
    .ok(res => res.status < 500)
    .set('Authorization', window.localStorage.getItem('TOKEN'))
    .send({ cat1: parsedCategory, total: score });

  return response.body;
}

