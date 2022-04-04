import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import {adjustServings} from './../reducers/specificRecipeDetailsSlice'
import styles from './../styles/recipeDetails.css'

function RecipeDetails() {

    const specificRecipe = useSelector(state => state.specificRecipe)
    const dispatch = useDispatch()

    let selectedServings = specificRecipe.servings;

    const handleChange = (e)=> {
      selectedServings = e.target.value()
    }

    const handleFormSubmit = (e)=> {
     e.preventDefault()
    }

    const recipeInDisplay = {
      recipeIndDisplay: specificRecipe,
      servings: selectedServings
    }
   
    return (
        <div className="reciperDetails">
          <br/>
          <form className="adjustServingsSection" onSubmit={handleFormSubmit}>
            <span>Servings</span>
          <input type="number" defaultValue={specificRecipe.servings} onChange={handleChange}/>
          <button onClick={()=>dispatch(adjustServings(recipeInDisplay))}>Adjust Servings</button>
          </form>
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