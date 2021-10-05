import { recipeData } from "../components/Recipe";

const initialState = {
  recipes: []
}

console.log(initialState)

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // compare that value to a list of criteria
    // those criteria are called cases
    case "GET_RECIPES":
      return {...state, recipes:recipeData}
    
    default:
      return state;
  }
};

export default rootReducer;
