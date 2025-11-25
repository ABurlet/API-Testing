//This test creates a booking and verifies the response

describe('Create Booking', () => {
it('should successfully create a booking', () => {
cy.request({ method: 'POST', // POST used here to create something new
url: 'https://restful-booker.herokuapp.com/booking',

body: {

firstname: "Amber",
lastname: "Burlet",
totalprice: 150,
depositpaid: true,
bookingdates: {

checkin: "2023-01-01",
checkout: "2023-01-05" },

additionalneeds: "Dinner"
}})

.then((response) => {
expect(response.status).to.eq(200);
expect(response.body.booking).to.have.property('firstname', 'Amber'); 
//makes sure test runs successfully with 200 status and that the body retrieves the first name correctly/successfullu
});
});
});

