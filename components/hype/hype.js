/**
 * Created by IRRO on 19/08/2015.
 */
if(Meteor.isClient) {
    Template.hype.helpers({
        isLink: function () {
            return this.link != "";
        },
        getData: function(){
            return this;
        },
        canUp:function(){
            return this.members.contains(Meteor.userId());
        }
    });
    Template.hype.events({
        "click .update": function (event) {
            if(!Session.get("preview") && this.members.contains(Meteor.userId())) {
                Session.set("hype", this);
            }
        },
        "click .link": function (event) {
            var el = $(event.target).parent();
            window.open(el.data("link"));
            if(!Session.get("preview") && this.members.contains(Meteor.userId())) {
                Meteor.call("addComment", this.message, this);
            }
        }
    });
}