/**
 * Created by IRRO on 19/08/2015.
 */
Template.Home.helpers({
    hypes: function () {
        return Hypes.find({}).fetch();
    }
});
