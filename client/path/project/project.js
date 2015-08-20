/**
 * Created by IRRO on 19/08/2015.
 */
Template.project.helpers({
    comments:function(){
        return Comments.find({hype:this._id},{limit:5,sort:{when:-1}});
    },
    getData:function(){
        return this;
    }
});
