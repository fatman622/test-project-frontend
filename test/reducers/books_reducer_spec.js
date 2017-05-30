import {expect} from 'chai';

import {GET_BOOKS, GET_BOOK, GET_BOOKS_ELASTIC} from '../../src/actions/types';
import reducer, {INITIAL_STATE} from '../../src/reducers/books_reducer';

describe('reducer book', () => {

  it('handles GET_BOOK', () => {
    const action = {
      type: GET_BOOK,
      payload: { 
        data: {
          id: 1,
          name: 'Lala'
        }
      }
    };
    const nextState = reducer(INITIAL_STATE, action);
    expect(nextState).to.exist;
    expect(nextState.book).to.deep.equal({
      id: 1,
      name: 'Lala'
    });
  });

  it('handles GET_BOOKS', () => {
    const action = {
      type: GET_BOOKS,
      payload: { 
        data: [
          {
            id: 1,
            name: 'Lala' 
          },
          {
            id: 1,
            name: 'Lalasa' 
          }
        ]
      }
    };
    const nextState = reducer(INITIAL_STATE, action);
    expect(nextState).to.exist;
    expect(nextState.all).to.deep.equal(
      [
        {
          id: 1,
          name: 'Lala' 
        },
        {
          id: 1,
          name: 'Lalasa' 
        }
    ]);
  });

   it('handles GET_BOOKS_ELASTIC', () => {
    const action = {
      type: GET_BOOKS_ELASTIC,
      payload: { 
        data: [
          {
            id: 1,
            name: 'Lala' 
          },
          {
            id: 1,
            name: 'Lalasa' 
          }
        ]
      }
    };
    const nextState = reducer(INITIAL_STATE, action);
    expect(nextState).to.exist;
    expect(nextState.all).to.deep.equal(
    [
      {
        id: 1,
        name: 'Lala' 
      },
      {
        id: 1,
        name: 'Lalasa' 
      }
    ]);
  });
});