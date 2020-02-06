import {combineReducers} from 'redux'
import recipeReducer from './recipeReducer';
const reducers=combineReducers({app: recipeReducer});
export default reducers;