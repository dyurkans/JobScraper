var request = require('request');
exports.index = function(req, res) {
	res.render('index', {user: req.user});
}

exports.search = function(req, res) {
	var title = req.params.title;
	request('http://api.linkedin.com/v1/jobs/1337', function(err, response, body) {
		console.log(response);
		res.render('searchResults', {'title': title});
	});
}

exports.test = function(req, res) {
	res.render('test');
}