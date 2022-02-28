Feature: JSON PLACEHOLDER - USERS

  @positive_scenario
  Scenario Outline: I should be able to send a certain post
    Given I created a "GET" request for "Json Placeholder" request for endpoint "/users/2"
    And key-values "Content-Type": "application/json" are present in the request headers
    When I send the request
    Then the response status should be "200"
    And the value of "id" in response body should be "2"
    And in the response body, the following data are present:

    Examples:
      |                                                                                                                                                                                                                                                                                                                                                                                                                                     |
      | {"id": 2,"name": "Ervin Howell","username": "Antonette","email": "Shanna@melissa.tv","address": {"street": "Victor Plains","suite": "Suite 879","city": "Wisokyburgh","zipcode": "90566-7771","geo": {"lat": "-43.9509","lng": "-34.4618"}},"phone": "010-692-6593 x09125","website": "anastasia.net","company": {"name": "Deckow-Crist","catchPhrase": "Proactive didactic contingency","bs": "synergize scalable supply-chains"}} |

  @positive_scenario
  Scenario: I should be able to send a certain post
    Given I created a "GET" request for "Json Placeholder" request for endpoint "/users"
    And key-values "Content-Type": "application/json" are present in the request headers
    When I send the request
    Then the response status should be "200"
    And the user total count should be "10"

  @negative_scenario
  Scenario: Status code should be 404 when invalid json placeholder users enpoint is accessed
    Given I created a "GET" request for "Json Placeholder" request for endpoint "/usersInvlid"
    And key-values "Content-Type": "application/json" are present in the request headers
    When I send the request
    Then the response status should be "404"

  @negative_scenario
  Scenario: Be able to filter users endpoint by existing email address
    Given I created a "GET" request for "Json Placeholder" request for endpoint "/users"
    And key-values "Content-Type": "application/json" are present in the request headers
    And key-values "email": "Nathan@yesenia.net" is presented in the query params
    When I send the request
    Then the response status should be "200"

  @negative_scenario
  Scenario: Should throw empty response when invalid non-existing email address is entered
    Given I created a "GET" request for "Json Placeholder" request for endpoint "/users"
    And key-values "Content-Type": "application/json" are present in the request headers
    And key-values "email": "notexisting@gmail.com" is presented in the query params
    When I send the request
    Then the response status should be "200"
    And the response body should be "empty"


  @negative_scenario
  Scenario: Requesting empty filtered item should return empty response
    Given I created a "GET" request for "Json Placeholder" request for endpoint "/users"
    And key-values "Content-Type": "application/json" are present in the request headers
    And key-values "email": "" is presented in the query params
    When I send the request
    Then the response status should be "200"
    And the response body should be "empty"

