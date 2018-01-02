var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Resolution Streak' });
});

router.post('/login', (req,res,next) => {
  console.log('successful route to post');
  console.log(req.body);
  db.checkLogin(req.body.username, req.body.password)
  .then(user => {
    console.log(user);
    res.redirect('/users/' + user[0].id)
  })
})

module.exports = router;
