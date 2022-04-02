import { createSlice } from '@reduxjs/toolkit'
import allRecipes from './../data/allRecipes'

const initialState = allRecipes

const allRecipesSlice = createSlice({
    name: 'specificRecipe',
    initialState :{
        specificRecipe: allRecipes
    },
    reducers: {
      displayRecipeDetails(state,action){
      return state.specificRecipe[action.payload]
      }
    }
  });

  export const {displayRecipeDetails} = allRecipesSlice.actions
  export default allRecipesSlice.reducer