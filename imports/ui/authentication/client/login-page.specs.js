import { EventHandler} from '../login-page_';

describe('login page actions', ()=> {
    it('is an object', ()=>{
        assert.isObject(EventHandler);
    });

    describe('facebookLogin function', ()=>{
        it('is a function', ()=> {
            assert.isFunction(EventHandler.facebookLogin);
        });
        it('called loginWithFacebook service', ()=>{
            this.loginWithFacebookSpy = sinon.spy(Meteor, 'loginWithFacebook');
            EventHandler.facebookLogin();
            sinon.assert.calledOnce(this.loginWithFacebookSpy);
        });
        it('called with correct params', ()=>{
            let option = this.loginWithFacebookSpy.lastCall.args[0],
                scopes = ['user_friends', 'public_profile', 'email', 'user_location', 'user_birthday', 'user_about_me', 'user_education_history', 'user_work_history'];
            expect(option).to.have.property('requestPermissions').that.is.eql(scopes);
        })
    });

    describe('googleLogin function', ()=>{
        it('is a function', ()=>{
            assert.isFunction(EventHandler.googleLogin);
        });
        it('called loginWithGoogle service', ()=>{
            this.loginWithGoogleSpy = sinon.spy(Meteor, 'loginWithGoogle');
            EventHandler.googleLogin();
            sinon.assert.calledOnce(this.loginWithGoogleSpy);
        });
        it('called with correct params', ()=>{
            let option = this.loginWithGoogleSpy.lastCall.args[0],
                scopes = ['profile', 'email', 'https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.me'];
            expect(option).to.have.property('requestPermissions').that.is.eql(scopes);
        })
    });

    describe('githubLogin function', ()=>{
        it('is a function', ()=>{
            assert.isFunction(EventHandler.githubLogin);
        });
        it('called loginWithGithub service', ()=>{
            this.loginWithGithubSpy = sinon.spy(Meteor, 'loginWithGithub');
            EventHandler.githubLogin();
            sinon.assert.calledOnce(this.loginWithGithubSpy);
        });
        it('called with correct params', ()=>{
            let option = this.loginWithGithubSpy.lastCall.args[0],
                scopes = ['profile', 'user:email', 'read:org'];
            expect(option).to.have.property('requestPermissions').that.is.eql(scopes);
        })
    });

    /*describe('linkedinLogin function', ()=>{
        it('is a function', ()=>{
            assert.isFunction(EventHandler.linkedinLogin);
        });
        it('called loginWithLinkedin service', ()=>{
            this.loginWithLinkedinSpy = sinon.spy(Meteor, 'loginWithLinkedin');
            EventHandler.linkedinLogin();
            sinon.assert.calledOnce(this.loginWithLinkedinSpy);
        });
    })*/
});
