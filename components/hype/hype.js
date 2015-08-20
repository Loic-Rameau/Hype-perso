/**
 * Created by IRRO on 19/08/2015.
 */
if(Meteor.isClient) {
    Template.hype.helpers({
        isLink: function () {
            return this.link != "";
        },
        getData: function(){
            return {
                _id: this._id
            };
        }
    });
    Template.hype.events({
        "click .update": function (event) {
            Session.set("hype", this);
        },
        "click .link": function (event) {
            var el = $(event.target).parent();
            window.open(el.data("link"));
            Meteor.call("addComment", "Baited by the video", this);
        }
    });
}