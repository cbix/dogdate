import { Accounts } from 'meteor/accounts-base';

if(Meteor.isServer) {
    Meteor.publish('users', function() {
        return Meteor.users.find({});
    });
}
