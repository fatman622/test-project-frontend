import * as actions from '../../src/actions/index'
import * as types from '../../src/actions/types'
import {expect} from 'chai';

describe('actions books', () => {
  describe('#getBooksElastic()', function(){
    it('returns action GET_BOOKS_ELASTIC', function(){
      // execute
      let action = actions.getBooksElastic();
      // verify
      expect(action.type).to.deep.equal('GET_BOOKS_ELASTIC');
      expect(action.payload).to.exist;
    });
  });

  describe('#getBooks()', function(){
    it('returns action GET_BOOKS', function(){
      // execute
      let action = actions.getBooks();
      // verify
      expect(action.type).to.deep.equal('GET_BOOKS');
      expect(action.payload).to.exist;
    });
  });

  describe('#createBooks()', function(){
    it('returns action CREATE_BOOK', function(){
      // execute
      let action = actions.createBook();
      // verify
      expect(action.type).to.deep.equal('CREATE_BOOK');
      expect(action.payload).to.exist;
    });
  });

  describe('#deleteBook()', function(){
    it('returns action DELETE_BOOK', function(){
      // execute
      let action = actions.deleteBook();
      // verify
      expect(action.type).to.deep.equal('DELETE_BOOK');
      expect(action.payload).to.exist;
    });
  });

  describe('#getBook()', function(){
    it('returns action GET_BOOK', function(){
      // execute
      let action = actions.getBook('1');
      // verify
      expect(action.type).to.deep.equal('GET_BOOK');
      expect(action.payload).to.exist;
    });
  });
})


describe('actions profiles', () => {
  describe('#signIn()', function(){
    it('returns action SIGN_IN', function(){
      // execute
      let action = actions.signIn();
      // verify
      expect(action.type).to.deep.equal('SIGN_IN');
      expect(action.payload).to.exist;
    });
  });

  describe('#signOut()', function(){
    it('returns action SIGN_OUT', function(){
      // execute
      let action = actions.signOut();
      // verify
      expect(action.type).to.deep.equal('SIGN_OUT');
      expect(action.payload).to.exist;
    });
  });

  describe('#signUp()', function(){
    it('returns action SIGN_UP', function(){
      // execute
      let action = actions.signUp();
      // verify
      expect(action.type).to.deep.equal('SIGN_UP');
      expect(action.payload).to.exist;
    });
  });

  describe('#getProfile()', function(){
    it('returns action GET_PROFILE', function(){
      // execute
      let action = actions.getProfile();
      // verify
      expect(action.type).to.deep.equal('GET_PROFILE');
      expect(action.payload).to.exist;
    });
  });

  describe('#getProfiles()', function(){
    it('returns action GET_PROFILES', function(){
      // execute
      let action = actions.getProfiles();
      // verify
      expect(action.type).to.deep.equal('GET_PROFILES');
      expect(action.payload).to.exist;
    });
  });

  describe('#updateProfile()', function(){
    it('returns action UPDATE_PROFILE', function(){
      // execute
      let action = actions.updateProfile();
      // verify
      expect(action.type).to.deep.equal('UPDATE_PROFILE');
      expect(action.payload).to.exist;
    });
  });
})


