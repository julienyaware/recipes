import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import recipesReducer from './../reducers/allRecipesSlice'
import specificRecipeReducer from './../reducers/specificRecipeDetailsSlice'


const reducer = combineReducers({
    allRecipes: recipesReducer,
    specificRecipe: specificRecipeReducer
  })


export const store = configureStore({
    reducer
  })