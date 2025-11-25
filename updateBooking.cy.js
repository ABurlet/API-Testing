const baseUrl = 'https://restful-booker.herokuapp.com';

describe('Update Booking', () => {
    it('Should update booking ID 1', () => { 
cy.request('POST', `${baseUrl}/auth`, {
username: 'admin',
password: 'password123' })

.then((authResponse) => {
    expect(authResponse.status).to.eq(200);
    const token = authResponse.body.token; 

cy.request({

    method: 'PUT',  //send PUT request to update booking ID 1
    url: `${baseUrl}/booking/1`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cookie': `token=${token}`
    },

body: {
    firstname: "AmberUpdated",  
    lastname: "Burlet",
    totalprice: 200,
    depositpaid: false,
    bookingdates: {

        checkin: "2023-02-01",
        checkout: "2023-02-05"   //optional to make sure the API kept the date structure intact

},

additionalneeds: 'Lunch' }

})

.then((response) => {
expect(response.status).to.eq(200); //makes sure the update is successful with status code 200
expect(response.body.firstname).to.eq('AmberUpdated');

});
});
});
});

//this test makes sure the endpoint is reachable and changes the state of it successfully
// PUT requests replace the whole of the booking object
//if partial updates were supported, I would use a PATCH request instead of PUT.