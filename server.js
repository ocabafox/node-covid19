'use strict';

const Path = require("path");
const Hapi = require('@hapi/hapi');
const Routes = require("./lib/routes");
const Settings = require("./settings");

const init = async () => {

	const server = Hapi.server({
			port: Settings.port,
			host: Settings.host
	});

  await server.register([require("@hapi/vision"), require("@hapi/inert")]);

	server.views({
    engines: { html: require('handlebars') },
    path: Path.join(__dirname, "lib/views"),
    compileOptions: {
      pretty: false
    },
    isCached:false
  });

	server.route(Routes);

	await server.start();
	console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
