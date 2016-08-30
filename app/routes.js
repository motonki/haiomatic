var Account = require('./models/models');

	module.exports = function(app) {
		app.get('/api/accounts', function(req, res) {

			Account.find(function(err, accounts) {
				if(err)
					res.send(err);
				res.json(accounts);
			});
		});

		app.post('/api/accounts', function(req, res) {
			var nb = req.body.account.balance + req.body.sum;
			Account.update({"name": req.body.account.name, "balance": nb
			}, function(err, accounts) {
				if(err)
					res.send(err);
				Account.find(function(err,accounts) {
					if(err)
						res.send(err);
					res.json(accounts);
				});
			});
		});

		app.get('*', function(req,res) {
			res.sendfile('./public/views/index.htm');
		});
	};