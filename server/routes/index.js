var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/photos', db.getAllPhotos);
//router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/photos', db.createPhoto);
router.post('/sign', db.sign);
//router.delete('/api/puppies/:id', db.removePuppy);


module.exports = router;
