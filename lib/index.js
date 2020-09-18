const NextKoa = require('next-koa')
const path = require('path')
const nextApp = NextKoa({
  dev: process.env.NODE_ENV !== 'production',
  dir: path.resolve(__dirname, '../../..')
})
nextApp.prepare();

module.exports = strapi => {
  return {
    initialize() {
	  strapi.app.use(nextApp.middleware);
	  strapi.router.get('/', nextApp.middleware)
    },
  };
};


