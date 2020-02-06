import React, { useState, useEffect } from 'react'
import { connect, useSelector,useDispatch  } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';

const Recommend = ({ selectedCategory }) => {
    const history = useHistory();
    
    const _onClick = id => {
        history.push({ pathname: '/detail', state: { recipeId: id } }); //Bu fonksiyona verilen path'e yönlendirir.
    }
    const selectedCategory2 = [];
    selectedCategory.map(item => {
        console.log("sajdk");
            if (item.response.metaData.avgPoint >= 4.7 && item.response.metaData.totalVote >= 70) { 
                selectedCategory2.push(item);
            }
        
            
    }
        
    );
     console.log(selectedCategory2);       
    return (
        <div className="container">
            <SearchBar />
        {selectedCategory2.map(item => (
            
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


export default withRouter(connect(mapStateToProps)(Recommend));
