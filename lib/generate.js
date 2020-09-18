const fs = require('fs');
const path = require('path');
const projectDirectory = path.resolve("../..");
const pagesDir = path.resolve(projectDirectory,"pages")
console.log("Checking UI Folder..");
console.log(pagesDir);
const configDir = path.resolve(projectDirectory, "config")
console.log("Checking Config Folder..");
console.log(configDir);

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir); //Create dir in case not found
  fs.copyFileSync(path.resolve(process.cwd(),'./lib/template/index.js'), pagesDir + "/index.js");
}

if (fs.existsSync(configDir)) {
  if(!fs.existsSync(configDir + "/middleware.js")) {
	fs.copyFileSync(path.resolve(process.cwd(),'./lib/template/middleware.js'), configDir + "/middleware.js");
  }

}
