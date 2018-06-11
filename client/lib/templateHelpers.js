import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.registerHelper('selected', function(opt, val) {
    return opt == val ? 'selected' : '';
});
