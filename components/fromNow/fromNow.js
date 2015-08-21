/**
 * Created by IRRO on 19/08/2015.
 */
if(Meteor.isClient){
    Template.fromNow.helpers({
        format:function(){
            var moments = new ReactiveVar(moment(this).fromNow());
            var data = this;
            Meteor.setInterval(function(){
                moments.set(moment(data).fromNow());
            },60000);
            return moments.get();
        }
    });
}