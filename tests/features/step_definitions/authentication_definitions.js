module.exports = function () {

    this.Given(/^I visit the login page$/, () => {
        browser.url('http://localhost:3000/login');
    });

    this.When(/^I click Facebook Login button$/, () => {
        pending();
    });

    this.Then(/^I should be redirect to the home page$/, () => {
        pending();
    });
};
