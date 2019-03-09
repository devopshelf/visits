//Require the dev-dependencies
let expect = require('chai').expect;
const PORT = process.env.PORT || 8081

describe('PORT TESTING', () => {
    it('it should have correct port', (done) => {
        expect(PORT).to.be.a('number');
        done();
    });
});