import React from 'react';
import { useSelector } from 'react-redux'

function RecipeDetails() {

    const recipeCollection = useSelector(state=> state.allRecipes)
    const specificRecipe = useSelector(state => state.specificRecipe)

    const renderedRecipes = recipeCollection.map(recipe => (
        <article className="post-excerpt" key={recipe.title}>
          <h3>{recipe.title}</h3>
        </article>
      ))
   
    return (
        <div className="reciperDetails">
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