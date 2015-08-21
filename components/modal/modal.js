/**
 * Created by IRRO on 21/08/2015.
 */
if(Meteor.isClient) {
    Template.modal.events({
        "click #joinGroup": function () {
            if (Meteor.user()) {
                Meteor.call("applyJoinProject", Meteor.user(), Session.get("hype").data);
            }
        }
    })
}