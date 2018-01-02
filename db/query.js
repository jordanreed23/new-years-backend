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

module.exports = {
  getResolutions,
  checkLogin,
};
