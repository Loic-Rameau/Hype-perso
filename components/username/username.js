/**
 * Created by IRRO on 19/08/2015.
 */

if(Meteor.isClient){
    Template.username.helpers({
        name: function () {
            if(this.user !== undefined) {
                if (this.user.username)
                    return this.user.username;
                return this.user.profile.name;
            } else {
                return "";
            }
        }
    });
}