"use strict";

const General = require("../models/general");

module.exports = {
  read: async (request, h) => {

		var getGeneralPromise = General.getGeneralStats();
		let generalResult = await getGeneralPromise;

		return h.view("home",{
			data: {
				general: generalResult,
			},
			page: "Dashboard",
			description: "Welcome to my fish market"
			},
			{
				layout: "layout"
			}
		);
  }
 };
