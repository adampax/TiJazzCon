// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};


//set the coordinates for our demo to downtown NOLA
//we can do this automatically using the the Ti.Geolocation api
Alloy.Globals.coords = {
	lat:'29.943342',
	lon:'-90.064782'
};

//lets create some default collections to later hold our data
Alloy.Collections.meetups = new Backbone.Collection();