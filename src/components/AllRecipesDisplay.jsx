import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../app/store';
import allRecipes from '../data/allRecipes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import foodImg from './../foodImg.jpg'
import styles from './../styles/recipeCard.css'


function AllRecipesDisplay(props) {
    console.log(allRecipes)

    // const openRecipeDetails = (recipeInfo)=> {
    //   store.dis
    // }

    return (
        <div className="recipeCard">
           {allRecipes.map((recipe,i) => (
             <div className="recipesDisplay">
             <Link to={`/recipe/${recipe.title}`} className="cardA">
             <img className="cardLogo" src={foodImg}  alt={recipe.title} />           
             <div className="cardBody">
             <p className="cardSubTitle">
               <span>Serves</span>
               <span className="recipeInfo">{recipe.servings}</span>
               <span className="divider">|</span>
               <span>Author</span>
               <span className="recipeInfo">{recipe.author.name}</span>
             </p>
             <h3 className="title">
               {recipe.title}
             </h3>
             </div>
               </Link>      
               </div>
           ))}
        </div>


    );
}

export default AllRecipesDisplay;