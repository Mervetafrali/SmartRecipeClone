const initialState = {
    recipes: [],
    loading: false,
    request: false,
    selectedRecipes: [],
    selectedRecipe: "",
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'recipe/request':
            return {
                ...state,
                loading: true
            };
        case 'recipe/success':
            return {
                ...state,
                recipes: action.data,
                loading: false,
                request:false
            };
        case 'selectedRecipe/success':
            return { ...state, selectedRecipes: action.data,loading:false};
        default:
            return state;
    }
}