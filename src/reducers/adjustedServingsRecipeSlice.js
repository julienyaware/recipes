import { createSlice } from '@reduxjs/toolkit'
import allRecipes from './../data/allRecipes'

const initialState = {}


const multiplyIngredientsByNewServings = (quantity)=> {
    return quantity.substring(0, quantity.indexOf(' '));
    //console.log(nombo)
  }
  
  const generateNewServings = (arr)=> {
  const newQuantities = arr.map(ingredient => {
   return multiplyIngredientsByNewServings(ingredient)
    
  })
  console.log('new array ni '+ arr)
  return newQuantities
  }

const adjustedRecipeSlice = createSlice({
    name : 'adjustedServings',
    initialState: {
        adjustedRecipe: initialState
    },
    reducers : {
        adjustServings(state,actions){
            return {
              ...actions.payload.recipeIndDisplay,
              ingredients: generateNewServings(actions.payload.recipeIndDisplay.ingredients)
            }
            }
    }
})

export const {adjustServings} = adjustedRecipeSlice.actions
export default adjustedRecipeSlice.reducer