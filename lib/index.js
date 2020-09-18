const NextKoa = require('next-koa')
const path = require('path')
const nextApp = NextKoa({
  dev: process.env.NODE_ENV !== 'production',
  dir: path.resolve(__dirname, '../../..')
})
nextApp.prepare();

function updateAPIUrls(routes) {
	let obj = [];
	
	routes.forEach((item) => {
		
		let newItem = item;
		newItem.path = "/api" + newItem.path;
		obj.push(newItem);
	});
	return obj;
}

module.exports = strapi => {
  return {
    initialize() {
		if(strapi.config.middleware.settings.nextjs.overripeApiRoutes) {
			strapi.config.routes = updateAPIUrls(strapi.config.routes);
		}
		strapi.app.use(nextApp.middleware);
		strapi.router.get('/', nextApp.middleware)
    },
  };
};


