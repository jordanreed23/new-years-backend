var express = require('express');
var router = express.Router();
var db = require('../db/query')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', (req,res,next) => {
db.getResolutions(req.params.id)
.then( data => {
  res.json(data)
})
})

router.post('/:id/new', (req,res,next) => {
  db.insertResolution(req.body)
  .then( data => {
    res.redirect('/users/' + req.params.id)
  })
})

module.exports = router;
