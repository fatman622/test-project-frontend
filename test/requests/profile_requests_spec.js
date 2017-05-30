var supertest = require('supertest-as-promised');  
var request = supertest('https://book-api-fatman622.herokuapp.com/api/v1');  
var assert = require('chai').assert;
var response_headers; 

describe('Profile API', function() {  
  it ('should return the access-token', function() {
    return request.post('/auth/sign_in')
    	.send({"email": "olegbabiy.ob@gmail.com", "password": "123456789"})
      .expect(200)
      .expect(function(response) {
        response_headers = response.headers
      });
  });

  it ('should sign out users', function() {
    return request.post('/auth/sign_out')
    	.send(response_headers)
      .expect(404)
  });

  it ('should sign up users', function() {
    return request.post('/auth')
    	.send({"email": "olegbabiy.ob@gmail.com", "password": "123456789", "password_confirmation": "123456789"})
      .expect(422)
  });

 	it ('should return current profile', function() {
    return request.get('/profiles/1')
    	.send(response_headers)
      .expect(200)
      .expect(function(response) {
        response_headers = response.headers
      });
  });

  it ('should return profiles', function() {
    return request.get('/profiles')
    	.send(response_headers)
      .expect(200)
      .expect(function(response) {
        response_headers = response.headers
      });
  });

  it ('should update profile', function() {
    return request.put('/profiles/1')
    	.send(response_headers)
    	.send({"first_name": "ZZZZ", "last_name": "zzzzz"})
      .expect(201)
      .expect(function(response) {
        response_headers = response.headers
      });
  });

});
