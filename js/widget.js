require(["jquery", "js/app"], function($, app){
   'use strict';
    var config = {
        // your configuration settings here
    };
    $(function() {
        // app.js is the one that contains 
        // all the widget functionality
        app.init(config);
    });
});