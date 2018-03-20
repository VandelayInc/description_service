'use strict';
const Faker = require('faker')
module.exports = {
  generateRandomId,
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomId(userContext, events, done) {
  const id = getRandomInt(1, 1e7);
  userContext.vars.id = id;
  let line = ""
  for (var i = 0; i < 20; i++){
    line += getRandomLetter();
    line += getRandomSpecial();
    line += getRandomInt(1,9);
  }
  userContext.vars.line = line;
  return done();
}


function getRandomLetter(){
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return alphabet[getRandomInt(0,51)]
}

function getRandomSpecial(){
  let characters = '!@#$%^&*()<>?:"{}[]'
  return characters[getRandomInt(0, 18)]
}

function getRandomLine(userContext, events, done){
  let line = ""
  for (var i = 0; i < 20; i++){
    line += getRandomLetter();
    line += getRandomSpecial();
    line += getRandomInt(1,9);
  }
  userContext.vars.line = line;
  return done()
}
