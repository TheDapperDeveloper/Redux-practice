const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // compare that value to a list of criteria
    // those criteria are called cases
    case "HELLO":
      return console.log("Hi");

    default:
      return state;
  }
};

export default rootReducer;
