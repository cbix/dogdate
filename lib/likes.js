import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Likes = new Mongo.Collection("likes");

Meteor.methods({
    'swipe'(a, b, like) {
        var l = Likes.findOne({a: a, b: b});
        var match = false;
        if(like) {
            var m = Likes.findOne({a: b, b: a, like: true});
            if(m) {
                match = true;
                Likes.update(m._id, {$set: {match: true}});
            }
        }
        if(l) {
            Likes.update(l._id, {
                $set: {like: like, match: match},
                $inc: {views: 1}
            });
        } else {
            Likes.insert({
                a: a, b: b, like: like,
                match: match, views: 1
            });
        }
        return match;
    }
});
