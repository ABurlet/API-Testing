const baseUrl = 'https://restful-booker.herokuapp.com';

describe('Deletes the booking', () => {
it('should successfully create a booking and then delete it', () => {
cy.request({ 
method: 'POST',
url: `${baseUrl}/booking`,

body: {

firstname: "Amber",
lastname: "Burlet",
totalprice: 123,
depositpaid: true,
bookingdates: {

checkin: "2024-01-01",
checkout: "2024-01-02" 
},

additionalneeds: "Breakfast"
}
}).then((createResponse) => {
expect(createResponse.status).to.eq(200);
expect(createResponse.body).to.have.property('bookingid');

const bookingId = createResponse.body.bookingid;
cy.request({
    method: 'POST',
    url: `${baseUrl}/auth`,
    body: {
        username: 'admin',
        password: 'password123'
    }
}).then((authResponse) => {
    expect(authResponse.status).to.eq(200);
    expect(authResponse.body).to.have.property('token');

    const token = authResponse.body.token;


    //this is where I delete the booking that I created above

    cy.request({
        method: 'DELETE',
        url: `${baseUrl}/booking/${bookingId}`,
        headers: { Cookie: `token=${token}`
    }
})
.then((deleteResponse) => {

        expect([200, 201, 204]).to.include(deleteResponse.status); // Status codes that confirm deletion
});
});
});  
});
});
