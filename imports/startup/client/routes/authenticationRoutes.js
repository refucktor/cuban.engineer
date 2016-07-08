import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../../ui/authentication/login-page';

export const AuthenticationRoutes = {
    goToLoginPage(){
        FlowRouter.route('/login', {
            name: 'login-page',
            action(){
                BlazeLayout.render('LoginPage')
            }
        })
    },

    configure(){
        this.goToLoginPage();
    }
};

if(Meteor.isClient){
    AuthenticationRoutes.configure();
}
