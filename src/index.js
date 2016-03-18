'use strict';

const notifier = require('node-notifier');
const _ = require('lodash');


function main(step, context, config, input, done) {
	const title = _.template(config.title)(context);
	const message = _.template(config.message)(context);

	notifier.notify({ title, message });

	const output = input;
	done(null, output, null);
}


module.exports = {
	main: main,
	defaults: {
		config: {
			title: '’cause: <%=task.name%>',
			message: '<%=prevStep.block%>: <%=input%>'
		},
		data: {},
		description: 'desktop notification'
	},
};
