var supertest = require('supertest-as-promised');  
var request = supertest('https://book-api-fatman622.herokuapp.com/api/v1');  
var assert = require('chai').assert;
var response_headers; 

describe('Book API', function() {  
  it ('should return the access-token', function() {
    return request.post('/auth/sign_in')
    	.send({"email": "olegbabiy.ob@gmail.com", "password": "123456789"})
      .expect(200)
      .expect(function(response) {
        response_headers = response.headers
      });
  });

 	it ('should return all books', function() {
    return request.get('/books')
    	.send(response_headers)
      .expect(200)
      .expect(function(response) {
        response_headers = response.headers
      });
  });

  it ('should update book', function() {
    return request.put('/books/2')
    	.send(response_headers)
    	.send({ author: 'Oleg', text: 'Learn Elm', available: true, pages: '3' })
      .expect(201)
      .expect(function(response) {
        response_headers = response.headers
      });
  });

  it ('should return book', function() {
    return request.get('/books/2')
      .send(response_headers)
      .expect(200)
      .expect(function(response) {
        response_headers = response.headers
      });
  });

  it ('should delete book', function() {
    return request.delete('/books/1')
      .send(response_headers)
      .expect(404)
  });

  it ('should return books by search', function() {
    return request.get('/books/search')
      .send(response_headers)
      .send({"query": "Oleg"})
      .expect(200)
      .expect(function(response) {
        response_headers = response.headers
      });
  });
});