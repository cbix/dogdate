import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.Swipe_card.helpers({
    randomUser() {
        if(!Meteor.user()) {
            return false;
        }
        var clicks = Likes.find({a: Meteor.userId()}, {sort: {views: 1}}).map(function(l) { return l.b; });
        console.log("clicks:", clicks);
        //var matches = Likes.find({a: Meteor.userId(), match: true}).map(function(l) { return l.b; });
        var me = Meteor.user().profile;
        var sex = "m";
        if(me.sex == "m") {
            sex = "w";
        }
        var array = Meteor.users.find({
            _id: {$nin: clicks},
            'profile.animal': me.animal,
            'profile.sex': sex
        }).fetch();
        console.log("found:", array);
        if(array.length == 0) {
            array = Meteor.users.find({_id: clicks[0]}).fetch();
            if(array.length == 0) {
                return false;
            }
            return array[0];
        }
        var randomIndex = Math.floor( Math.random() * array.length );
        return array[randomIndex];
    }
});
