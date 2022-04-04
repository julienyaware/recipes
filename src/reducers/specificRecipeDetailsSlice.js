import { createSlice } from '@reduxjs/toolkit'
import allRecipes from './../data/allRecipes'
import * as math from 'mathjs';
const initialState = allRecipes

// const multiplyIngredientsByNewServings = (quantity)=> {
//   return quantity.substring(0, quantity.indexOf(' '));
//   //console.log(nombo)
// }

// const generateNewServings = (arr)=> {
// const newQuantities = arr.map(ingredient => {
//  return multiplyIngredientsByNewServings(ingredient)
  
// })
// console.log('new array ni '+ arr)
// return newQuantities
// }

const multiplyIngredientsByNewServings = (ingredient,servings)=> {
  //return quantity.substring(0, quantity.indexOf(' '));
 //return quantity.substring(0, quantity.indexOf(' '));
    //const multiply = match => match * servings
    const multiply = match=> {
      let quantityPerPerson = math.divide(1,math.fraction(match))
      console.log('quantityPerPerson:'+ quantityPerPerson)
      //totalQuantityForAllServings
      //let totalQuantityForAllServings = +ää
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