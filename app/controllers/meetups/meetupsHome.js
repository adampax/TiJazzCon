var args = arguments[0] || {};

//const API_KEY = 'get yours here: https://secure.meetup.com/meetup_api/key/';

//NOLA
var coords = {
	lat:'29.943342',
	lon:'-90.064782'
};

//Meetup.com 'tech' category
const categoryID = 34;

var xhr = require('xhr');
var moment = require('alloy/moment');

//format the date range according to meetup.com's api requirement
var timeRange = moment().subtract(6, 'months').valueOf() + ',' + moment().add(6, 'months').valueOf();

xhr.send({
	url : 'https://api.meetup.com/2/open_events?key=' + API_KEY + '&lat='+coords.lat+'&lon='+coords.lon+'&category='+categoryID,
	method : 'GET',
	success : function(res) {
		//reset results in a collection which will trigger a bind on the table 
		Alloy.Collections.meetups.reset(res.results);
	},
	error : function(err) {
		console.log(err);
		$.table.setData([Ti.UI.createTableViewRow({
			title : 'Something happened with the meetup.com api fetch'
		})]);
	}
});

function transformModel(model) {
	//console.log(model.toJSON());
	transform = model.toJSON();
	transform.time = moment(transform.time).format('MM/DD/YY');
	transform.rsvp = 'RSVPs: ' + transform.yes_rsvp_count;

	return transform;
}

function rowClick(e) {
		var v = Alloy.createController('meetups/detail', e).getView();
		Alloy.Globals.tabgroup.activeTab.open(v);
}

