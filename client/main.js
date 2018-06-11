import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.App_body.onCreated(function() {
    Meteor.subscribe('users');
});

Template.App_body.helpers({
    matchCount() {
        if(!Meteor.user()) {
            return 0;
        }
        return Likes.find({a: Meteor.userId(), match: true}).count();
    }
});
