* This project is simple representation of webpack for typescript with nodejs 12
- npm install
- npm run prodbuild -- it will create index.js in build directory

* In this project we have typescipt file index.ts which is enttry point of project
* We are using webpack and webpack-cli to bundle typescript files into one js
* To compile typescript files added ts-loader and typescript
* To inherit node properties required for webpack.config, adding @tsconfig/node12 and @types/node
* To support continuous integration we are using webpack-cli --watch 
* This project also support express and nodemon use
* It has use of express with sqlite3