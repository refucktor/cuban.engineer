import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import './authenticationRoutes';

FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
        FlowRouter.go('login-page');
    }
}]);
