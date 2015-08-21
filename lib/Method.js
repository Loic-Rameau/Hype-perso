/**
 * Created by IRRO on 21/08/2015.
 */


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
    },
    addProject:function(post){
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        Hypes.insert(post);
    }
});