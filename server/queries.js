var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options),
	connectionString = 'postgres://localhost:5432/saac',
	db = pgp(connectionString);

//S3 signing
var crypto = require('crypto'),
    config = require('./config'),

    bucket = config.s3.bucket,
    awsKey = config.s3.awsKey,
    secret = config.s3.secret;

// add query functions

function getAllPhotos(req, res, next) {
  db.any('select * from photos')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL photos'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createPhoto(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db.none('insert into photos(name, breed, age, sex)' +
      'values(${name}, ${breed}, ${age}, ${sex})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one photo'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function sign (req, res, next) {
	var fileName = req.body.fileName,
        expiration = new Date(new Date().getTime() + 1000 * 60 * 5).toISOString();

    var policy =
    { "expiration": expiration,
        "conditions": [
            {"bucket": bucket},
            {"key": fileName},
            {"acl": 'public-read'},
            ["starts-with", "$Content-Type", ""],
            ["content-length-range", 0, 524288000]
        ]};

    policyBase64 = new Buffer(JSON.stringify(policy), 'utf8').toString('base64');
    signature = crypto.createHmac('sha1', secret).update(policyBase64).digest('base64');
    var response = {bucket: bucket, awsKey: awsKey, policy: policyBase64, signature: signature};
    res.send({bucket: bucket, awsKey: awsKey, policy: policyBase64, signature: signature});

}

module.exports = {
	getAllPhotos: getAllPhotos,
	createPhoto: createPhoto,
	sign: sign
};