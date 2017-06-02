import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import ProfilesReducer from './profiles_reducer';
import VideosReducer from './videos_reducer';
import ArticlesReducer from './articles_reducer';

const allReducers = combineReducers({
	form: formReducer,
	profiles: ProfilesReducer,
	videos: VideosReducer,
	articles: ArticlesReducer
});

export default allReducers
