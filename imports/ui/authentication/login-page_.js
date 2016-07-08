export const EventHandler = {
    facebookLogin: function(){
        Meteor.loginWithFacebook({
            requestPermissions: ['user_friends', 'public_profile', 'email', 'user_location', 'user_birthday', 'user_about_me', 'user_education_history', 'user_work_history']
        }, (err) => {
            if(err){
                console.log(err);
            }
        });
    },
    googleLogin: function(){
        Meteor.loginWithGoogle({
            requestPermissions: ['profile', 'email', 'https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.me'],
            access_type: 'offline'
        }, (err) => {
            if(err){
                console.log(err);
            }
        });
    },
    githubLogin: function () {
        Meteor.loginWithGithub({
            requestPermissions: ['profile', 'user:email', 'read:org']
        }, (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
};
