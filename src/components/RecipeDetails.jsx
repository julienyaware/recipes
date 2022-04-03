import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import {adjustServings} from './../reducers/adjustedServingsRecipeSlice'

function RecipeDetails() {

    const specificRecipe = useSelector(state => state.specificRecipe)
    const dispatch = useDispatch()

    // const handleAdjustServings = (e) =>{
    //  e.preventDefault
    // }

    const handleChange = (e)=> {
     
    }

    const recipeInDisplay = {
      recipeIndDisplay: specificRecipe
    }
   
    return (
        <div className="reciperDetails">
          <span>Servings</span>
          <br/>
          <button onClick={()=>dispatch(adjustServings(recipeInDisplay))}>Adjust Servings</button>
            <h3 className="cardTitle">{specificRecipe.title}</h3>
            <h4>{specificRecipe.description}</h4>
            <p>Prep Time:<span>{specificRecipe.prep_time_min}</span></p>
          <div className="ingredients">
            <h4 className="heading">Ingredients</h4>
            <ul className="listItem">
              {specificRecipe.ingredients.map((ingredient,index) => (
                <li key={index}>
                 {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="cookingInstructions">
            <h4 className="heading">Instructions</h4>
            <div className="cookingInstructions">
            <ul className="listItem">
              {specificRecipe.directions.map((direction,i)=>(
              <li key={i}>
               {direction}
              </li>
              ))}
               </ul>
            </div>
          </div>
        </div>

        
    );
}

export default RecipeDetails;