Meteor.setTimeout(function (argument) {
	// Promise.all([
	// 	import('meteor/templating'),
	// 	import('meteor/htmljs'),
	// ])
	import('meteor/blaze-dynamic-import')
	.then( (ns) => {
		console.log(ns);
		import('/imports/main.js');
	})

}, 1000);
