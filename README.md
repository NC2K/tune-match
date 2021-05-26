# Tune Match
by...
  - Kalan Proudmoore
  - Katherine Tam
  - Nick Day
  - Casey Cameron

## Description

Tune Match allows a player to guess the name of a song, scoring up to 1,000 fake dollars (or points) per round. 

## Problem Domain

Tune Match addresses the lack of song guessing games in the world. 

## Libraries, Frameworks, packages...

This app requires npm, superagent, and React.

## Instructions

To run this on your own computer
0) npm i on both backend and frontend projects
1) Setup a server via heroku
  - In your Heroku server settings, find the config vars and grab the database url
  - Inside your backend project, create a .env file. 
    - Set PORT=8001
    - DATABASE_URL=postgres://user:password@serverURL:port/database
    API Keys: the iTunes api does not require an api key

1) Spin up the backend project with npm run start
2) Spin up this project with npm run start

## API Routes
- POST '/api/scores' to upload your scores to the database
- GET '/api/scores' to access your scores from the database
- GET '/api/categories/:search' to access the iTunes api submitting search details
  - your search will be the title of the song. Inside of the frontend project, in /data/data.js, export
  categories with search terms like below. Put them inside of an array.

  ```export const categories = [{
    category: '50\'s',

    songs: [
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
      'Sh-Boom+The+Crew+Cuts',
      'The+Thing+Phil+Harris',
      'Come+On-a+My+House+Rosemary+Clooney',
      'Auf+Wiedersehen+Sweetheart+Vera+Lynn',
      'You+Send+Me+Sam+Cooke'
    ]
  }]``` 

### Database setup
Model your database as follows:
```
await client.query(` 
      CREATE TABLE users (
        id SERIAL PRIMARY KEY NOT NULL,
        name VARCHAR(512) NOT NULL,
        avatar VARCHAR(512),
        email VARCHAR(512) NOT NULL,
        hash VARCHAR(512) NOT NULL
      );
    
      CREATE TABLE scores (
        id SERIAL PRIMARY KEY NOT NULL,
        cat1 VARCHAR(512) NOT NULL,
        cat2 VARCHAR(512),
        cat3 VARCHAR(512),
        total INTEGER NOT NULL,
        user_id INTEGER NOT NULL REFERENCES users(id)
      );
    `);
```

## Versions
  1) Tune match v1.0
    - Basic functionality.
      - Sign Up/Login
      - Category select
      - Gameplay with 10 questions and scoring
      - Results page
      - Leaderboard
      - Credits