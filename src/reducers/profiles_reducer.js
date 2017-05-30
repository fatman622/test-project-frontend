import { GET_PROFILES, GET_PROFILE} from '../actions/types';

const INITIAL_STATE ={
	all_profiles: [], profile: null
};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case GET_PROFILES:
			return {...state, all_profiles: action.payload.data} ;
		case GET_PROFILE:
			return {...state, profile: action.payload.data} ;
		default:
			return state;
	}
}