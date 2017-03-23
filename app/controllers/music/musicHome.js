// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var Map = require('ti.map');

/**
 * we are going to mock the data and geolocation stuff for our demo.
 * We can fetch the users location and do the api requests as well,
 * see the meetupsHome.js controller for an HttpClient example
 */

var annotations = [];

var sampleData = require('places_data').results;


sampleData.forEach(function (l) {
    var ann = Map.createAnnotation({
        //modelCid: l.cid,
        latitude: l.geometry.location.lat,
        longitude: l.geometry.location.lng,
        title: l.name,
        subtitle: l.vicinity,
        //rightButton: OS_IOS ? Titanium.UI.iOS.SystemButton.DISCLOSURE : '/images/arrow-right.png'
    });
    annotations.push(ann);
});

$.mapview.addAnnotations(annotations);