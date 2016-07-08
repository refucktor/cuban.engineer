import { Template } from 'meteor/templating';

import './login-page.html';
import '/imports/ui/authentication/login-page.styl';
import { EventHandler } from './login-page_';

Template.LoginPage.events({
    'click #facebook-login': EventHandler.facebookLogin
});

