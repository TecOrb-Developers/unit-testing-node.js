// app.test.ts
import { expect } from 'chai';
import request from 'supertest';
import app from './app';

describe('GET /', () => {
  it('should return "Hello, World!"', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('"Mocha and Chai project under development"')
      .end((err:any, res:any) => {
        if (err) return done(err);
        done();
      });
  });
});

describe('GET /', () => {
  it('message', (done) => {
    request(app)
      .get('/message')
      //.expect(200)
      .expect('"This url give the message"')
      .end((err:any, res:any) => {
        if (err) return done(err);
        done();
      });
  });
});
