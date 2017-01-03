# Vue Router example 1 - Named Routes and Named Views

This is a simple example of how you can setup Vue Router with named routes and views.

Named views allow you to mount components to specific sections of the page based on the route.

They are a powerful and simple way to manage your UI.

Full explanation of the project here - [http://patrickwho.me/vue-js-router-named-routes-views/](http://patrickwho.me/vue-js-router-named-routes-views/)

## Getting Started

* Download / clone / fork the repo, run NPM install.
* Rename env.example.js to env.js
* Run 'npm install json-server -g'
* Run 'json-server generate.js' from your terminal of choice.
	* if you get a network error, try a different port by running 'json-server generate.js --port 5555' replacing '5555' with any port number you want. Make sure to update your env.js accordingly.
* Run ‘npm run dev’ from the root directory of the project. The project should open up automatically in your browser.
* main.js is where the action starts. Open it up and examine the code.

## Mock DB Using json-server

Uses json-server

In your terminal:

```bash

# select any port you want for your fake api
1. json-server generate.js --port 3004

```
If you use VS Code, you can see test.http and use the Rest Client extension to test the server responses.

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
