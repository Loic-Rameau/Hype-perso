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
            return $.inArray(Meteor.userId(),this.members) != -1;
        }
    });
    Template.hype.events({
        "click .link": function (event) {
            var el = $(event.target).parent();
            window.open(el.data("link"));
            if(this.autoComment) {
                if (!Session.get("preview") && $.inArray(Meteor.userId(), this.members) != -1) {
                    Meteor.call("addComment", this.message, this);
                }
            }
        }
    });
}