"use strict";

module.exports = {
	getCountryStats
};

function getCountryStats(page) {
	var query = ""

	var request = require('request');
	if (page !== undefined) {
		query = "?page="+page
	}

	var options = {
		'method': 'GET',
		'url': "https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search"+query,
		'headers': {
		}
	};

	return new Promise(function(resolve, reject) {
		request.get(options, function(err, resp, body) {
				if (err) {
						reject(err);
				} else {
						resolve(JSON.parse(body));
				}
		})
	})
}
