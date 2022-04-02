import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import foodImg from './../foodImg.jpg'
import styles from './../styles/recipeCard.css'
import {displayRecipeDetails} from './../reducers/specificRecipeDetailsSlice'


function AllRecipesDisplay(props) {
  const allRecipes = useSelector(state=> state.allRecipes)
  const dispatch = useDispatch()

    return (
        <div className="recipeCard">
           {allRecipes.map((recipe,i) => (
             <div className="recipesDisplay" key={i} onClick={()=> dispatch(displayRecipeDetails(i))}>
             <Link to={`/recipe/${recipe.title}`} className="cardA">
             <img className="cardLogo" src={foodImg}  alt={recipe.title} />           
             <div className="cardBody">
             <span className="cardSubTitle">
             <h3 className="title">
               {recipe.title}
             </h3>
               <span>Author</span>
               <span className="recipeInfo">{recipe.author.name}</span>
               <span className="divider">|</span>
               <span>Serves</span>
               <span className="recipeInfo">{recipe.servings}</span>
             </span>
             </div>
               </Link>      
               </div>
           ))}
        </div>
    );
}

export default AllRecipesDisplay;