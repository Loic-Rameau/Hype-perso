/**
 * Created by IRRO on 21/08/2015.
 */
Template.project_new.helpers({

});
Template.project_new.events({
    "submit .project_new":function(event){
        event.preventDefault();
        console.log($(event.target).serializeArray());
    }
});
Template.project_new.rendered = function(){
    $('#icon').selectpicker();
};