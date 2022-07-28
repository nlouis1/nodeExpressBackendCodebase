# nodeExpressBackendCodebase,
backend api codebase,

1.first of all run 'npm init' in your terminal
2. after that install nessessary dependancies by typing 'npm install "dependency name"'
## nessessary dependencies,
1. express,
2. @babel/polyfill @babel/register @babel/cli @babel/core @babel/preset-env,
3. sequelize sequelize-cli,
4. compression cors core-js morgan nodemon ,
## in package.json under script add this line of code
 "start":"nodemon --require @babel/register --require @babel/polyfill ./src/server.js"
## necessary files
### babel.config.json

{
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "edge": "17",
            "firefox": "60",
            "chrome": "67",
            "safari": "11.1"
          },
          "useBuiltIns": "usage",
          "corejs": "3.6.5"
        }
      ]
    ]
  }
### .sequelizerc

require("@babel/register");
const path = require("path");

module.exports = {
  config: path.resolve("./src/database/config", "config.js"),
  "models-path": path.resolve("./src/database/models"),
  "seeders-path": path.resolve("./src/database/seeders"),
  "migrations-path": path.resolve("./src/database/migrations"),
};

## create src folder where the rest of codes will be
### under src folder add server.js that will run the whole application
### under src folder create another folder called utils

1. and add a file called response.js and add the following code
   
export const onSuccess = (res, resp_code, resp_msg, data) => {
    return res.status(resp_code).json({
      resp_code,
      resp_msg,
      data,
    });
  };
  
  export const onError = (res, resp_code, resp_msg) => {
    return res.status(resp_code).json({
      resp_code,
      resp_msg,
    });
  };
  
  export const onServerError = (res) => {
    return res.status(500).json({
      resp_code: 500,
      resp_msg: "Internal Server Error",
    });
  };
### under src folder create a folder called routes
1. under routes create index.js file
 and add the following codes

import express from 'express'
import route1 from './route1'
import route2 from './route2'
const router =express.Router()
router.use("/route1",route1);
router.use("/route2",route2);
export default router;

2. depends on your routes names you can edit the names "router1" and "router2"
with the names of your choices
### under src folder create a folder called database
## database part
1. go to terninal and run 
'npx sequelize init'
this command will create config,models,migrations,seeders in src/database folder

2. go to models folder and open index.js file and under let sequelize
3. in if statement add the following codes
   " sequelize
    .authenticate()
    .then(async () => {
      console.log(`${mode} DATABASE CONNECTION ESTABLISHED SUCCESSFULLY!`);
    })
    .catch((err) => {
      console.log('Unable to connect to the database: ', err);
    }); "
4. in config folder open config.js and add this line of code at the beginning
   " module.exports= "
   and change the name of database, user, database name, and password and put in there yours

## now you have a codebase that you can use to develop your backend api
