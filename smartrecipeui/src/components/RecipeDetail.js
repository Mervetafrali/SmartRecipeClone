import React from 'react';
import { connect, useSelector,useDispatch  } from 'react-redux';
import { withRouter, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
const RecipeDetail = ({ location }) => {

    
    const recipeList = useSelector(state => state.app.recipes);
    const dispatch = useDispatch();
    const selectedRecipe = recipeList.filter(item => {
        console.log("item",item._id);
        if (item._id === location.state.recipeId) { return true; }
        return false;
    }
    );
    console.log(selectedRecipe);
    if (selectedRecipe.length <= 0) {
        return <Link to="/">Lütfen Ansayfaya Gidiniz</Link>
    }
    
    return (
        <div className="container">
            <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={selectedRecipe[0].response.imgLink} alt="Card Image" className="card-img"></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{selectedRecipe[0].response.title}</h5>
                                <p className="card-text">{selectedRecipe[0].response.category}</p>
                                <p className="card-text">{selectedRecipe[0].response.ingredients}</p>
                                <p className="card-text">{selectedRecipe[0].response.recipeInstructions}</p>
                                
                                
                                </div>
                        </div>
                    </div>
                
                        
        
               

    </div>);

};


export default withRouter(RecipeDetail);