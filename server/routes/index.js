var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/photos', db.getAllPhotos);
router.get('/user/:userId', db.getUser);
router.post('/photos', db.createPhoto);
router.post('/sign', db.sign);
router.post('/user', db.createUser);
router.put('/user/:userId', db.updateUser);



module.exports = router;
