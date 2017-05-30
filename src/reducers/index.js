import {combineReducers} from 'redux';
import BooksReducer from './books_reducer';
import ProfilesReducer from './profiles_reducer';
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
	books: BooksReducer,
	form: formReducer,
	profiles: ProfilesReducer
});

export default allReducers
