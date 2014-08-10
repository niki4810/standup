Standup
=======

A simple note management application for your standup meetings.

![Standup](https://raw.githubusercontent.com/niki4810/standup/gh-pages/app-icons/standup-app-demo.gif "Standup")


# Installation guidlines

To install the app locally, please follow these steps

- Clone the repo and `cd` into the directory.
- Run `npm install` (this will install all the dependencies)
- Run `gulp bower` (to install all the third party libs)
- Run `gulp` (or) `gulp build` (to bundle all the js files and generate a dist directory)
- cd into `dist` directory and launch the index.html page. (alternatively you could run any local server in this directory, for example [http-server](https://www.npmjs.org/package/http-server) )


# Other gulp tasks

- `gulp verify` 
  runs, `jshint` , `jscs` and `jest` unit tests

- `gulp watch`
  watches for changes under `src/**/*.*` and runs `gulp build` to re-generate the `dist` directory.

# Contribute to this project

- Standup is a fun app build with ReactJS (Flux architecture), browserify and gulp. 
- If you have a cool idea to improve it, please feel free to open a PR.
- Before opening a PR, just make sure that you don't have any errors when your run `gulp verify` :)


