@Sales
  Feature: Sales flow
    description Class

  Scenario: User make a purchase with 2 item
    Given User open the website sauce demo
    When User input "standard_user" as userName and input "secret_sauce" as pass
    Then User already on landing page
    Then User Product list by "Name (Z to A)"
    And User choice 2 product from the list