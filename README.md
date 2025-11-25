# API-Testing

In this assignment, I used JSONPlaceholder in Postman to test three API operations:
- GET
- POST
- DELETE

GET returned a 200 status and list of posts.
POST returned a 201 status and created a fake post with ID 101.
DELETE returned 200 status which confirmed the deletion request.

Challenges:
Overall this assignment was very simple and easy to understand. I didn't experience many challenges apart from figuring out where the appropriate tabs were located. It was straightforward in my opinion.

**Screenshots have been uploaded in individual files in this repo to show GET, POST and DELETE requests.**






**ADDED CYPRESS API TESTS**
These tests validate endpoints of the restful booker api.
The purpose is to make sure that creating a booking, retrieving the booking, updating a booking, and deleting a booking all work correctly.

**FEATURES**
- Used Cypress, cy.request() for API calls
- Includes testing for GET, POST, PUT and DELETE endpoints
- Validates status codes such as, 200, 201 and 204
- Uses organized files in Cypress/e2e/apiHealthCheck
- Includes comments and variables that can be reused

  **INSTRUCTIONS**
  1 clone the repository
  2 run 'npm install' for installing dependencies
  3 open cypress with "npx cypress open"
  4 when cypress opens, select e2e testing, then chrome or electron
  5 Open the test specs in cypress/e2e/apiHealthCheck

  
 
