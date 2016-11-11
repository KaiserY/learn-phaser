// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// TODO(gdi2290): switch to DLLs

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import './public/css/variables.scss';

// import "../node_modules/ionic-angular/css/ionic.css";
// import "../node_modules/ionicons/dist/css/ionicons.css";
// import "../node_modules/ionicons/dist/css/ionicons-core.css";

// import "../node_modules/material-design-lite/material.min.css";
// import "../node_modules/material-design-lite/material.min.js";
// import "../node_modules/material-design-icons/iconfont/material-icons.css";
// import "./public/css/material-icons.css";
// import "./public/css/roboto.css";
// import "./public/css/styles.css";

if ('production' === process.env.ENV) {
  // Production


} else {
  // Development

}
