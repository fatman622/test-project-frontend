import { GET_PROFILE} from '../actions/types';

const INITIAL_STATE ={
	profile: null
};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case GET_PROFILE:
			return {...state, profile: action.payload.data} ;
		default:
			return state;
	}
}