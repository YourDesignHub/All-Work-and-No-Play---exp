const path = require('path');
const app = require(path.resolve('./app/resources'));

const request = (require('supertest'))(app);

describe("SAVING DATA", () => {
    describe('#Test to save events and resources', function() {

        it.skip("Get all events", function( done ) {
            testRequest(request.get('/events').expect(200) )
            .then( (response) => {
                console.log(response.body);
                done();
            })
            .catch( (err) => {
                done(err);
            })
        })

        it.skip("Sends event for saving", function( done ) {
            testRequest(request.post('/event/test3').send({stuff: "morestuff"}).expect(200) )
            .then( (response) => {
                done();
            })
            .catch( (err) => {
                done(err);
            })
        })

        it("Updates an event", function( done ) {
            testRequest(request.put('/event/test1').send({stuff: "updatedStuff"}).expect(200) )
            .then( (response) => {
                done();
            })
            .catch( (err) => {
                done(err);
            })
        })

        it.skip("Deletes an event", function( done ) {
            testRequest(request.delete('/event/deletethis').expect(200) )
            .then( (response) => {
                done();
            })
            .catch( (err) => {
                done(err);
            })
        })
    })
})






function testRequest( req ) {
    return new Promise((resolve, reject) => {
        req
        .end((err, result) => {
            if(err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}