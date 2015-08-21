/**
 * Created by IRRO on 21/08/2015.
 */

Template.project_list.helpers({
    hypes: function () {
        return Hypes.find({owner:this.user}).fetch();
    },
    applayent:function(){
        return Joins.find({project:this._id}).fetch();
    },
    getUser:function(){
        return Meteor.users.findOne({_id:this.user})
    },
    getMembers:function(){
        var a = [];
        this.members.forEach(function(val){
            a.push(Meteor.users.findOne({_id:val}));
        });
        return a;
    }
});

Template.project_list.events({
    'shown.bs.tab a[data-toggle="tab"]': function(event){

    },
    "click .accept-candidature":function(event){
        Meteor.call("registerUserProject",this.user,Hypes.findOne({_id:this.project}));
    },
    "click .refuse-candidature":function(event){
        Meteor.call("unregisterUserProject",this.user,Hypes.findOne({_id:this.project}));
    }
});