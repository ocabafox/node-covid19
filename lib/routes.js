"use strict";

const Path = require("path");
const Home = require("./controllers/home");
const Country = require("./controllers/country");

module.exports = [
  {
    method: "GET",
    path: "/",
    handler: Home.read,
    config: {
      description: "Gets top 10 countries"
    }
  },
	{
    method: "GET",
    path: "/countries",
    handler: Country.read,
    config: {
      description: "Gets all countries"
    }
  }];
