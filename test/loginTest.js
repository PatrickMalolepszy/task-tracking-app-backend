import request from "supertest";
import {describe, it} from "mocha";
import app from "../server/server";

describe('POST /login', function() {
  it('responds OK', function(done) {
    request(app)
      .get('/login')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});