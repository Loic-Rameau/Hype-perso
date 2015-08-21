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
    },
    registerUserProject:function(user,project){
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        project.members.push(user);
        Hypes.update({_id:project._id},project);
        Meteor.call("unregisterUserProject",user,project);
    },
    unregisterUserProject:function(user,project){
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        Joins.remove({user:user,project:project._id});
    },
    applyJoinProject:function(user,project){
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        Joins.insert({
            user:user._id,
            project:project._id
        });
    }
});