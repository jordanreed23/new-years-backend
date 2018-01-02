var db = require('./connection');

function checkLogin(user, pass) {
  return db('users').where({
    'username': user,
    'password': pass,
  })
}

function getResolutions(user){
  return db('resolutions').where('user_id', user);
}

function insertResolution(data){
  return db('resolutions').insert(data).returning('*')
}

module.exports = {
  getResolutions,
  checkLogin,
  insertResolution,
};
