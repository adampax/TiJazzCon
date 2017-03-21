var args = arguments[0] || {};
var moment = require('alloy/moment');

var meetup = Alloy.Collections.meetups.at(args.index).toJSON();

console.log(meetup);

//set the data the old fashioned way
$.title.text = meetup.name;
$.when.text = 'When: ' + moment(meetup.time).format('ddd, MMMM Do YYYY, hA');
$.where.text = 'Where: ' + meetup.venue.name;
$.rsvp.text = 'RSVPs: ' + meetup.yes_rsvp_count;

//strip html from description field
$.description.text = meetup.description ? meetup.description.replace(/<(?:.|\n)*?>/gm, '') : 'No description available.';

function closeWindow(){
	$.win.close();
}
