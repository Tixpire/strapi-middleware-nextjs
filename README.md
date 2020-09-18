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
    public: {
        defaultIndex: false
    }
  },
};
```

and in your root directory create a `pages` folder

```bash
touch pages/index.js
```

Paste inside index.js
```javascript
function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage
```

```bash
strapi build
strapi run
```

### Strapi Middleware NextJS Config
```javascript
"enabled": boolean, // Enable or disable the middle ware based on config
"overripeApiRoutes": boolean, // Enable or disable the api route adjustment [default:"/api/{route}"), false:"/{route}" ]
"enableProd": boolean, // Enable NextJS middleware in production environment 
```