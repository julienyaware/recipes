import allRecipes from "../data/allRecipes";

export const showData = ()=>{
    return {
        type: 'allRecipes/showAll',
        payload: allRecipes
      }
}

const initialState = [];
export const allRecipesReducer = (allRecipes = initialState, action) => {
  switch (action.type) {
    case 'allRecipes/showAll':
      return action.payload;
    default:
      return allRecipes;
  }
}