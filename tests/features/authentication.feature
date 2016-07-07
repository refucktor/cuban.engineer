Feature: Oauth authentication

  @watch
  Scenario: Authenticate with Facebook
    Given I visit the login page
    When I click Facebook Login button
    Then I should be redirect to the home page
