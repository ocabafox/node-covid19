"use strict";

const Country = require("../models/country");


module.exports = {
  read: async (request, h) => {
		var getCountryPromise = Country.getCountryStats(request.query.page);

		let countryResult = await getCountryPromise;

		var pageLessThatFive
		var nextPage
		var hasNextPage
		var previousPage
		var hasPreviousPage
		var currentPage
		var totalPage
		var hideFirst

		totalPage = countryResult.data.paginationMeta.totalPages;
		currentPage = countryResult.data.paginationMeta.currentPage;

		nextPage = 1
		hasNextPage = false
		previousPage = 1
		hasPreviousPage = true
		pageLessThatFive = true
		hideFirst = true

		if (currentPage < 3) {
			hideFirst = false
		}

		if (currentPage < 5) {
			pageLessThatFive = false
		}

		if (currentPage < totalPage) {
			nextPage = currentPage + 1
		}

		if (currentPage > 1) {
			previousPage = currentPage - 1
		}

		if (currentPage === 1) {
			hasPreviousPage = false
		}

		if (currentPage !== totalPage){
			hasNextPage = true
		}

		if (currentPage === totalPage) {
			hasNextPage = false
		}

		if (totalPage < 5) {
			pageLessThatnFive = false
		}


		return h.view("country",{
			data: {
				country: countryResult,
				pageLessThatFive: pageLessThatFive,
				nextPage: nextPage,
				previousPage: previousPage,
				hasNextPage: hasNextPage,
				hasPreviousPage: hasPreviousPage,
				hideFirst: hideFirst,
			},
			page: "All Countries",
			description: "List of Countries"
			},
			{
				layout: "layout"
			}
		);
	}
};
