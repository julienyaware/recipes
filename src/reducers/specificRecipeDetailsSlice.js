import { createSlice } from '@reduxjs/toolkit'
import allRecipes from './../data/allRecipes'
import * as math from 'mathjs'
const initialState = allRecipes


const multiplyIngredientsByNewServings = (ingredient,servings)=> {
    const multiply = match=> {
      
      let quantityPerPerson = eval(math.divide(1,match)) 
      console.log('servings' + servings)
      let totalQuantityForAllServings =math.multiply(quantityPerPerson,servings)
      return math.fraction(totalQuantityForAllServings)
     }
     console.log(ingredient.replace(/\d+/g, multiply))
     return ingredient.replace(/\d+/g, multiply)

}


const generateNewServings = (arr,servings)=> {
const newQuantities = arr.map(ingredient => {
 return multiplyIngredientsByNewServings(ingredient,servings)
  
})
console.log('new array ni '+ newQuantities)
return newQuantities
}


const allRecipesSlice = createSlice({
    name: 'specificRecipe',
    initialState :{
        specificRecipe: allRecipes
    },
    reducers: {
      displayRecipeDetails(state,action){
      return state.specificRecipe[action.payload]
      },
      adjustServings(state,action){
        return {
          ...action.payload.recipeIndDisplay,
          ingredients: generateNewServings(action.payload.recipeIndDisplay.ingredients,action.payload.servings)
        }
        },
        resetState(state,action){
          return {
            ...allRecipes
          }
        }
    }
  });

  export const {displayRecipeDetails, adjustServings, resetState} = allRecipesSlice.actions
  export default allRecipesSlice.reducer