/**
 * Created by IRRO on 21/08/2015.
 */
var nom =  new ReactiveVar(""), icon=new ReactiveVar(""), link=new ReactiveVar("");
Template.project_new.helpers({
    getData:function(){
        return {
            nom: nom.get(),
            icon: icon.get(),
            link: link.get()
        }
    }
});
Template.project_new.events({
    "submit .project_new":function(event){
        event.preventDefault();
        var data = $(event.target).serializeArray();
        data.push({
            name:"owner",
            value:Meteor.userId()
        });
        var post = {};
        data.forEach(function(val){
            post[val.name] = val.value;
        });
        if(post.autoComment === undefined) {
            post.autoComment = false;
        } else if(post.autoComment === "on") {
            post.autoComment = true;
        }
        post.members = [Meteor.userId()];
        Meteor.call("addProject",post);
        Router.go("home");
    },
    "change .project_new":function(event){
        switch ($(event.target).attr("id")){
            case "nom":
                nom.set(event.target.value);
                break;
            case "icon":
                icon.set(event.target.value);
                break;
            case "link":
                link.set(event.target.value);
                break;
        }
    }
});

Template.project_new.rendered = function(){
    $('#icon').selectpicker();
};