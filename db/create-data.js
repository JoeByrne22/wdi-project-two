const mongoose = require('mongoose');
const env = require('./config/environments');

const Film = require('../models/film');
const User = require('../models/user');

mongoose.connect(env.dbUri);

//clear the database...
Film.collection.drop();
User.collection.drop();

const filmData = [
  {
    name: 'The Room',
    description: 'Johnny is a successful banker who lives happily in a San Francisco townhouse with his fiancée, Lisa. One day, inexplicably, she gets bored with him and decides to seduce his best friend, Mark. From there, nothing will be the same again.',
    releaseDate: 2003,
    cast: ['Tommy Wiseau', 'Juliette Danielle', 'Greg Sestero' ],
    image: 'https://thesilvermirror.files.wordpress.com/2011/02/the-room-poster.jpg'
  }, {
    name: 'Hot Rod',
    description: 'Self-proclaimed stuntman Rod Kimble is preparing for the jump of his life - to clear fifteen buses to raise money for his abusive stepfather Frank\'s life-saving heart operation.',
    releaseDate: 2007,
    cast: ['Andy Samberg', 'Isla Fisher', 'Ian McShane'],
    image: 'https://fanart.tv/fanart/movies/10074/movieposter/hot-rod-52f3e5572d96a.jpg'
  }, {
    name: 'Hackers',
    description: 'Hackers are blamed for making a virus that will capsize five oil tankers.',
    releaseDate: 1995,
    cast: ['Jonny Lee Miller', 'Angelina Jolie', 'Jesse Bradford'],
    image: 'http://static.cinemagia.ro/img/db/movie/00/15/73/hackers-683940l.jpg'
  }, {
    name: 'Watchman',
    description: 'In 1985 where former superheroes exist, the murder of a colleague sends active vigilante Rorschach into his own sprawling investigation, uncovering something that could completely change the course of history as we know it.',
    releaseDate: 2009,
    cast: ['Jackie Earle Haley', 'Patrick Wilson', 'Carla Gugino'],
    image: 'http://www.watchmencomicmovie.com/posters/watchmen-theatrical-poster-big.jpg'
  }, {
    name: 'Léon',
    description: 'Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin\'s trade.',
    releaseDate: 1994,
    cast: [ 'Jean Reno', 'Gary Oldman', 'Natalie Portman'],
    image: 'http://www.kennelco.com/wp-content/uploads/2016/03/Leon.jpg'
  }, {
    name: 'Fight Club',
    description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    releaseDate: 1999,
    cast: ['Brad Pitt', 'Edward Norton', 'Meat Loaf'],
    image: 'https://moviemaster1703.files.wordpress.com/2010/12/fight-club-movie-poster-1020270798.jpg'
  }, {
    name: 'The Blair Witch Project',
    description: 'Three film students vanish after traveling into a Maryland forest to film a documentary on the local Blair Witch legend, leaving only their footage behind.',
    releaseDate: 1999,
    cast: [ 'Heather Donahue', 'Michael C. Williams', 'Joshua Leonard'],
    image: 'https://www.dvdsreleasedates.com/posters/800/T/The-Blair-Witch-Project-movie-poster.jpg'
  }, {
    name: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    releaseDate: 1972,
    cast: [ 'Marlon Brando', 'Al Pacino', 'James Caan'],
    image: 'http://3.bp.blogspot.com/-kfFobXahgCI/T2e9e7R6uwI/AAAAAAAAAxY/tZtoOySAHKs/s1600/the-godfather-movie-poster-1020243893.jpg'
  }, {
    name: 'Good Will Hunting',
    description: 'Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.',
    releaseDate: 1997,
    cast: [ 'Robin Williams', 'Matt Damon', 'Ben Affleck' ],
    image: 'https://industrialscripts.com/wp-content/uploads/2015/04/005534.jpg'
  }, {
    name: 'It',
    description: 'In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.',
    releaseDate: 2017,
    cast: ['Bill Skarsgård', 'Jaeden Lieberher', 'Finn Wolfhard'],
    image: 'https://addictedtohorrormovies.files.wordpress.com/2016/06/it-remake-movie-poster-2017.jpg'
  }
];

Film
  .create(filmData)
  .then(films => {
    console.log(`${films.length} films have been added`);
    mongoose.connection.close();
  });
