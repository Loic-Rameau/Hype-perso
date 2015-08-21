if (Meteor.isClient) {
    Session.set("hype", Hypes.find({},{sort:{name:-1}}).fetch()[0]);
    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}