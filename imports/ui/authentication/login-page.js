import { Template } from 'meteor/templating';

import './login-page.html';
import { EventHandler } from './login-page_';

Template.LoginPage.events({
    'click #facebook-login': EventHandler.facebookLogin
});

