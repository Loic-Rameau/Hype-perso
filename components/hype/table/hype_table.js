/**
 * Created by IRRO on 19/08/2015.
 */
if(Meteor.isClient){
    function getComment(hype) {
        if(hype !== null)
            return Comments.findOne({hype: hype._id}, {sort: {when: -1}});
    }
    Template.hype_table.helpers({
        number: function () {
            if(this.data !== null)
                return Comments.find({hype: this.data._id}).count();
            return 0;
        },
        date: function () {
            var comment = getComment(this.data);
            if (comment) {
                return comment.when;
            } else {
                return "";
            }
        },
        user:function(){
            var comment = getComment(this.data);
            if(comment){
                return comment.user;
            }
        },
        commentaire: function () {
            var comment = getComment(this.data);
            if (comment) {
                return comment.comment;
            } else {
                return "";
            }
        }
    });
}