var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var whoami = {};
	whoami.ipaddress = req.ip;
	whoami.language = req.headers["accept-language"].split(',')[0];
	whoami.software = req.headers["user-agent"].split('(')[1].split(')')[0];
  	res.status(200).json(whoami);
});

module.exports = router;
