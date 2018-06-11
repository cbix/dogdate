import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.Matches.helpers({
    matches() {
        var m = Likes.find({a: Meteor.userId(), match: true}).map(function(l) {
            return l.b;
        });
        return Meteor.users.find({_id: {$in: m}});
    }
});

