"use strict";

module.exports = {
	getGeneralStats
};

function getGeneralStats() {
	var request = require('request');
	var options = {
		'method': 'GET',
		'url': 'https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search',
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
