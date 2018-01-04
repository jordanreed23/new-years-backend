var db = require('./connection');

function checkLogin(user, pass) {
  return db('users').where({
    'username': user,
    'password': pass,
  })
}

function getResolutions(user){
  return db('resolutions').where('user_id', user).orderBy('resolution', 'desc');
}

function insertResolution(data){
  return db('resolutions').insert(data).returning('*')
}

function updateStreak(data){
  return db('resolutions').where('id', data.id).update('streak', data.streak);
}

function startOver(data){
  return db('resolutions').where('id', data.id).update('streak', data.streak);
}

function deleteResolution(data){
    return db('resolutions').where('id', data.id).delete()
}

module.exports = {
  getResolutions,
  checkLogin,
  insertResolution,
  updateStreak,
  startOver,
  deleteResolution,
};
