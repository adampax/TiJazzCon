/**
 * @param {Object} args
 * @param {string} args.method			HTTP method GET, POST, etc.  
 * @param {string} args.url				url to send the request
 * @param {Object} args.headers			optional object with header name/value pairs such as {'Content-Type': 'application/json}
 * @param {Object} args.data			optional data packet to be sent with POST
 * @param {Function} args.success		success callback
 * @param {Function} args.error 		error callback 
 */

var _ = require('alloy/underscore');

exports.send = function(args) {
	var request = Titanium.Network.createHTTPClient();

	request.onload = function() {
		var response;
			try {
				response = JSON.parse(this.responseText);
			} catch(e) {
				Ti.API.warn('Unable to parse JSON for xhr(): ' + JSON.stringify(e));
			}
		
		if(_.isFunction(args.success)){
			args.success(response);
		}
	};

	request.onerror = function(e) {
		Ti.API.warn('HTTP error for: ' + args.url);

			var status = this.status;
			
			Ti.API.error('Xhr lib response error: ');
			Ti.API.error('status: ' + status);
			Ti.API.error('responseText: ' + this.responseText);
			
			if(_.isFunction(args.error)){
				args.error(e);
			}
		
	};
	request.timeout = 30000;

	request.open(args.method || 'GET', args.url);
	
	// add any headers
	for (var header in args.headers) {
		request.setRequestHeader(header, args.headers[header]);
	}	
	if(args.data) {
		request.send(JSON.stringify(args.data));
	} else {
		request.send();
	}
	
};
