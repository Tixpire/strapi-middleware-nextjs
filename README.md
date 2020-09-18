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

```javascript
module.exports = {
  settings: {
	nextjs: {
      enabled: true,
    },
	public: {
		defaultIndex: false
	}
  },
};
```
