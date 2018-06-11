import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.Settings.events({
    'submit form.settings'(event) {
        event.preventDefault();
        let u = {
            profile: {
                name: event.target.name.value,
                age: event.target.age.value,
                animal: event.target.animal.value,
                sex: event.target.sex.value,
                image: event.target.image.value
            },
        };
        Meteor.users.update(Meteor.userId(), {$set: {profile: u.profile}});
    }
});
