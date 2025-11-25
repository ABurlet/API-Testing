describe('Get Booking Details', () => {
it('Should return booking details for ID 1', () => {
cy.request('GET', 'https://restful-booker.herokuapp.com/booking/1').then((response) => {

expect(response.status).to.eq(200);
expect(response.body).to.have.property('firstname');

});
});
});
//retrieves booking details for ID 1