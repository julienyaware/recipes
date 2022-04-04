import { createSlice } from '@reduxjs/toolkit'
import allRecipes from './../data/allRecipes'
import * as math from 'mathjs';
const initialState = allRecipes

const multiplyIngredientsByNewServings = (ingredient,servings)=> {
    const multiply = match=> {
      let quantityPerPerson = math.divide(1,math.fraction(match))
      console.log('quantityPerPerson:'+ quantityPerPerson)
      //totalQuantityForAllServings
      //let totalQuantityForAllServings 
      return math.fraction(quantityPerPerson)
     }
     console.log(ingredient.replace(/\d+/g, multiply))
     return ingredient.replace(/\d+/g, multiply)

}

const generateNewServings = (arr)=> {
const newQuantities = arr.map(ingredient => {
 return multiplyIngredientsByNewServings(ingredient)
  
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
        }
    }
  });

  export const {displayRecipeDetails, adjustServings} = allRecipesSlice.actions
  export default allRecipesSlice.reducer