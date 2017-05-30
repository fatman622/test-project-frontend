import {expect} from 'chai';

import { GET_PROFILES, GET_PROFILE} from '../../src/actions/types';
import reducer, {INITIAL_STATE} from '../../src/reducers/profiles_reducer';

describe('reducer profile', () => {

  it('handles GET_PROFILE', () => {
    const action = {
      type: GET_PROFILE,
      payload: { 
        data: {
          id: 1,
          name: 'Oleg'
        }
      }
    };
    const nextState = reducer(INITIAL_STATE, action);
    expect(nextState).to.exist;
    expect(nextState.profile).to.deep.equal({
      id: 1,
      name: 'Oleg'
    });
  });

  it('handles GET_PROFILES', () => {
    const action = {
      type: GET_PROFILES,
      payload: { 
        data: [
          {
            id: 1,
            name: 'Oleg' 
          },
          {
            id: 2,
            name: 'Oleg' 
          }
        ]
      }
    };
    const nextState = reducer(INITIAL_STATE, action);
    expect(nextState).to.exist;
    expect(nextState.all_profiles).to.deep.equal(
    [
      {
        id: 1,
        name: 'Oleg' 
      },
      {
         id: 2,
        name: 'Oleg' 
      }
    ]);
  });
});