import { createStore, combineReducers } from 'redux';
import { allRecipesReducer } from '../reducers/allRecipesReducer';

export const store = createStore(combineReducers({
    allRecipesReducer: allRecipesReducer
}
    
))