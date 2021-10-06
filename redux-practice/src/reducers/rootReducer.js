import { recipeData } from "../components/Recipe";

const initialState = {
  recipe: []
}

console.log(initialState)

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // compare that value to a list of criteria
    // those criteria are called cases
    case "GET_RECIPES":
      return {...state, recipe:action.payload}
    
    default:
      return state;
  }
};

export default rootReducer;
