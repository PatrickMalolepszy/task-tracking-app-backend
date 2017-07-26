import request from "supertest";
import {describe, it} from "mocha";
import app from "../server/server";


describe('POST /login', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});