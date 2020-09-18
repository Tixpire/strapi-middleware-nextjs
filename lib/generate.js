const fs = require('fs');
const path = require('path');
const projectDirectory = path.resolve("../../..");
const pagesDir = path.resolve("pages")
const configDir = path.resolve("config")

if (!fs.existsSync(pagesDir)) {
  console.log('The path doesnt exist.');
  fs.mkdirSync(pagesDir); //Create dir in case not found
  fs.copyFileSync(path.resolve(process.cwd(),'./lib/template/index.js'), pagesDir + "/index.js");
}

if (fs.existsSync(configDir)) {
  console.log('The path doesnt exist.');
  if(!fs.existsSync(configDir + "/middleware.js")) {
	fs.copyFileSync(path.resolve(process.cwd(),'./lib/template/middleware.js'), configDir + "/middleware.js");
  }

}
