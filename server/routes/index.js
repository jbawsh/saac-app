var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/photos', db.getAllPhotos);
//router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/photos', db.createPhoto);
//router.put('/api/puppies/:id', db.updatePuppy);
//router.delete('/api/puppies/:id', db.removePuppy);


module.exports = router;
