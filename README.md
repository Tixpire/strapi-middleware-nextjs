# Strapi NextJS Middleware

## How it works

Creates additional routing details for the root url of your project.


## Installing

Using npm

```bash
npm install --save strapi-middleware-nextjs next react react-dom
```

Using yarn

```bash
yarn add strapi-middleware-nextjs next react react-dom
```

## Setup

For Strapi stable versions, add a `middleware.js` file within your config folder

e.g

```bash
touch config/middleware.js
```

To use different settings per environment, see the [Strapi docs for environments](https://strapi.io/documentation/v3.x/concepts/configurations.html#environments).

You can parse environment variables for the config here as well if you wish to, please see the [Strapi docs for environment variables](https://strapi.io/documentation/v3.x/concepts/configurations.html#environment-variables).

Enable the cache middleware by adding the following snippet to an empty middleware file or simply add in the settings from the below example:

```javascript
module.exports = ({ env }) => ({
  settings: {
    nextjs: {
      enabled: true,
    },
  },
});
```

Starting the CMS should now log the following
