/**
 * Created by IRRO on 19/08/2015.
 */
T9n.setLanguage('fr');
if(Meteor.isClient) {
    Session.set("preview", false);
}
var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
    {
        _id: "username",
        type: "text",
        displayName: "username",
        required: true,
        minLength: 5
    },
    {
        _id: 'email',
        type: 'email',
        required: true,
        displayName: "email",
        re: /.+@(.+){2,}\.(.+){2,}/,
        errStr: 'Invalid email'
    },
    {
        _id: 'username_and_email',
        type: 'text',
        required: true,
        displayName: "Login"
    },
    pwd
]);

AccountsTemplates.configure({
    onLogoutHook:function(){
        console.log("logout");
        Router.go("home");
    }
});

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
    Session.set("preview", false);
    this.render('Home');
}, {name: "home"});

Router.route("/login",function(){
    Session.set("preview", false);
    this.render("login");
},{name:"login"});

Router.route("/project/new",function(){
    Session.set("preview",true);
    this.render("project_new");
},{name:'project.new'});

Router.route("/project/:_id",function(){
    Session.set("preview", false);
    this.render("project",{data:Hypes.findOne({_id:this.params["_id"]})});
},{name:"hype.detail"});

Router.route("/:_id/projects",function(){
    Session.set("preview", false);
        this.render("404");
},{name:'project.show'});