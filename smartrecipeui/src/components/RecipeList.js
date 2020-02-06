import React from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';

const RecipeList = ({ selectedCategory }) => {
    const history = useHistory();
    const _onClick = id => {
        history.push({ pathname: '/detail', state: { recipeId: id } }); //Bu fonksiyona verilen path'e yönlendirir.
    }

    return (
        <div className="container">
        {selectedCategory.map(item => (
             <div  className="card mb-3" key={item._id} onClick={() => _onClick(item._id)}>           
             <div className="row no-gutters">
                     <div className="col-md-4">
                         <img src={item.response.imgLink} alt="Card Image" className="card-img"></img>
                     </div>
                     <div className="col-md-8">
                         <div className="card-body">
                             <h5 className="card-title">{item.response.title}</h5>
                             <p className="card-text">{item.response.category}</p>
                              </div>
                     </div>
                 </div>
             </div>
         ))}
     </div>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedCategory: state.app.selectedRecipes
    };
}


export default withRouter(connect(mapStateToProps)(RecipeList));