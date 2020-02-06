import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import NavBar from './components/NavBar';
import Category from './components/Category';
import TopFoods from './components/TopFoods';
import Recommend from './components/Recommend';
function App() {
  return (<Router>
    <div className="App">
         <Header/>
          <NavBar/>
          
          <Switch>
            <Route exact path="/">
              <SearchBar />
              <RecipeList />

            </Route>
            <Route path="recipes">
            
          </Route>
          <Route path="/detail" component={RecipeDetail}>
          </Route>
          <Route path="/category">
           
            <Category/>
            
          </Route>
          <Route path="/topFoods">
           
           <TopFoods/>
           </Route>
          <Route path="/recommend">
           
           <Recommend/>
           
         </Route>
          </Switch>
      
    </div>
  </Router>);
}

export default App;