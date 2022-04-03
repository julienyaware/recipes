import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import recipesReducer from './../reducers/allRecipesSlice'
import specificRecipeReducer from './../reducers/specificRecipeDetailsSlice'
import adjustedServingsRecipereducer from '../reducers/adjustedServingsRecipeSlice';


const reducer = combineReducers({
    allRecipes: recipesReducer,
    specificRecipe: specificRecipeReducer,
    adjustedServings: adjustedServingsRecipereducer
  })


export const store = configureStore({
    reducer
  })