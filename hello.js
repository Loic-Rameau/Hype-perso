Hypes = new Mongo.Collection("hypes");
Comments = new Mongo.Collection("comments");
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

Meteor.methods({
    addComment: function(comment,hype){
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        Comments.insert({
            hype:hype._id,
            comment: comment,
            user: Meteor.user(),
            when: new Date()
        });
    }
});