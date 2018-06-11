Template.Card.events({
    'click .card-btn-hate'(event) {
        Meteor.call('swipe', Meteor.userId(), this.user._id, false);
    },
    'click .card-btn-love'(event) {
        Meteor.call('swipe', Meteor.userId(), this.user._id, true, function(err, match) {
            if(match) {
                alert("It's a match!");
            }
        });
    }
});
