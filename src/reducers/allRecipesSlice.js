import { createSlice } from '@reduxjs/toolkit'
import allRecipes from '../data/allRecipes'

const initialState = allRecipes

const allRecipesSlice = createSlice({
    name: 'allRecipes',
    initialState,
    reducers: {
    }
  });

  export default allRecipesSlice.reducer