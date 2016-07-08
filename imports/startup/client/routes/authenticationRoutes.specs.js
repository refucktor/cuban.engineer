import { AuthenticationRoutes } from './authenticationRoutes';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

describe('AuthenticationRoutes object', ()=>{
    beforeEach(() => {
        this.route = sinon.spy(FlowRouter, 'route');
        this.blazeLayout = sinon.spy(BlazeLayout, 'render');
    });
    afterEach(() => {
        this.route.restore();
        this.blazeLayout.restore();
    });

    it('is an object', () => {
        assert.isObject(AuthenticationRoutes);
    });
    describe('configuration function', () => {
        it('is a function', ()=> {
            assert.isFunction(AuthenticationRoutes.configure);
        });
    });
    describe('goToLoginPage function', () => {
        beforeEach(()=>{
            AuthenticationRoutes.goToLoginPage();
            this.options = this.route.lastCall.args[1];
        });

        it('called with correctly URL pattern to show login page', () => {
            sinon.assert.calledOnce(this.route);
            sinon.assert.calledWithMatch(this.route, sinon.match('/login'));
        });

        it('called with correctly options', () => {
            assert.propertyVal(this.options, 'name', 'login-page');
            assert.propertyVal(this.options, 'action', assert.isFunction(this.options.action));
        });
        describe('called action', () => {
            it('render method  with correct params ', ()=>{
                this.options.action();
                sinon.assert.calledOnce(this.blazeLayout);
                sinon.assert.calledWithExactly(this.blazeLayout, sinon.match('LoginPage'));
            });
        });
    });
});
