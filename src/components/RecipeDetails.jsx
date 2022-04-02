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
            {specificRecipe.description}
        </div>
    );
}

export default RecipeDetails;