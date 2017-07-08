import { Blaze, UI, Handlebars } from 'meteor/blaze';
import { Template } from 'meteor/templating';
import { HTML } from 'meteor/htmljs';
import { Spacebars } from 'meteor/spacebars';

export * from 'meteor/blaze';
export * from 'meteor/templating';
export * from 'meteor/htmljs';
export * from 'meteor/spacebars';

window.Blaze = Blaze; 
window.UI = UI; 
window.Handlebars = Handlebars; 
window.Template = Template;
window.HTML = HTML;
window.Spacebars = Spacebars;

// export const loader = function() {
// 	return import('meteor/blaze-html-templates')
// }

