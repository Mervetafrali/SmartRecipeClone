export const initialState = {
    loading: true,
    recipes: [],
    errorMessage: null
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "SEARCH_RECIPES_REQUEST":
        return {
          ...state,
          loading: true,
          errorMessage: null
        };
      case "SEARCH_RECIPES_SUCCESS":
        return {
          ...state,
          loading: false,
          recipes: action.payload
        };
      case "SEARCH_RECIPES_FAILURE":
        return {
          ...state,
          loading: false,
          errorMessage: action.error
        };
      default:
        return state;
    }
  };