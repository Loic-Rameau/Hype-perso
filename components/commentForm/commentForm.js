/**
 * Created by IRRO on 19/08/2015.
 */
if(Meteor.isClient) {
    Template.commentForm.helpers({
        placeholder:function() {
            if (Meteor.user()) {
                var name;
                if (Meteor.user().username !== undefined)
                    name = Meteor.user().username;
                else
                    name = Meteor.user().profile.name;
                return "Alors " + name + " un commentaire ?";
            }
        }
    });
    Template.commentForm.events({
        "click button[type='submit']": function (event) {
            var comment = $("#comment");
            var com = comment.val();
            Meteor.call("addComment", com, Session.get("hype").data);
            comment.val("");
        }
    });
}