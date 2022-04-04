import { createSlice, useSelector } from '@reduxjs/toolkit'
import allRecipes from './../data/allRecipes'
import Fraction from 'mathjs'


const initialState = {}

const multiplyIngredientsByNewServings = (ingredient,servings)=> {
    //return quantity.substring(0, quantity.indexOf(' '));
    //const multiply = match => match * servings
    const multiply = match=> {
     let quantityPerPerson = Math.divide(1,Math.fraction(match.toString()))
     //totalQuantityForAllServings
     let totalQuantityForAllServings = Math.multiply(Math.fraction(quantityPerPerson.toString()),servings)
     return totalQuantityForAllServings
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