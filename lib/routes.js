FlowRouter.route('/', {
    name: 'root',
    action() {
        BlazeLayout.render('App_body', {main: 'Swipe_card'});
    }
});

FlowRouter.route('/settings', {
    name: 'settings',
    action() {
        BlazeLayout.render('App_body', {main: 'Settings'});
    }
});

FlowRouter.route('/matches', {
    name: 'matches',
    action() {
        BlazeLayout.render('App_body', {main: 'Matches'});
    }
});
