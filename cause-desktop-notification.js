'use strict';

var notifier = require('node-notifier');
var _ = require('lodash');


function fn(input, step, context, done) {
	var title = _.template(step.options.title)(context);
	var message = _.template(step.options.message)(context);

	notifier.notify({
		title: title,
		message: message
	});

	var output = input;
	done(null, output, null);
}


module.exports = {
	fn: fn,
	defaults: {
		options: {
			title: '’cause: <%=task.name%>',
			message: '<%=prev_step.block%>: <%=input%>'
		},
		data: {},
		description: 'desktop notification'
	},
};
