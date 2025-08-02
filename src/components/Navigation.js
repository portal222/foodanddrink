import React from "react";
import { Routes, Route, NavLink, HashRouter } from 'react-router-dom';
import Calories from "./Calories";
import Home from "./Home";
import RecipeResults from "./RecipeResults";
import ResultsCocktails from "./ResultsCocktails";
import Cocktails from "./Cocktails";
import CocktailsClick from "./CocktailsClick";
import CocktailGlass from "./CocktailGlass";
import DetailsRecipe from "./DetailsRecipe";


import RecipeResultsArea from "./RecipeResultsArea";
import RecipeResultsGro from "./RecipeResultsGro";

import RecipeResultsCat from "./RecipeResultsCat";
import Dish from "./Dish";
import logo from "../../public/assets/img/DD_logo.png"

const Navigation = () => {
  var today = new Date
  var year = today.getFullYear();

  return (
    <>
      <HashRouter basename="/">
        <div className="navContainer">
          <div className="navigation">
            <NavLink to="/" className="button1"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <p className="logoImg">
                <img src={logo}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                />
              </p>
            </NavLink>
            <NavLink to="/calories" className="button2"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Calories
            </NavLink>
            <NavLink to="/dish" className="button3"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Dish
            </NavLink>
            <NavLink to="/drink" className="button4"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Cocktails
            </NavLink>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calories" element={<Calories />} />
          <Route path="/:groceries" element={<RecipeResultsGro />} />
          <Route path="/recipe" element={<RecipeResults />} />
          <Route path="/cocktail" element={<ResultsCocktails />} />
          <Route path="/drink" element={<Cocktails />} />
          <Route path="/dish" element={<Dish />} />
          <Route path="/cocktailName/:drink" element={<CocktailsClick />} />
          <Route path="/cocktailGlass/:glass" element={<CocktailGlass />} />
          <Route path="/recipe/recipe/:recipeId" element={<DetailsRecipe />} />
          <Route path="/home/:recipeId" element={<DetailsRecipe />} />
          <Route path="dish/home2/:area" element={<RecipeResultsArea />} />
          <Route path="/home2/:area/recipe/:recipeId" element={<DetailsRecipe />} />
          <Route path="/:groceries/recipe/:recipeId" element={<DetailsRecipe />} />
          <Route path="Dish/home3/:category" element={<RecipeResultsCat />} />
          <Route path="home3/:category" element={<RecipeResultsCat />} />
          <Route path="/home3/:category/recipe/:recipeId" element={<DetailsRecipe />} />

        </Routes>
        <div className="footer">
          <p>
            InTerVal &copy;{year}
          </p>
        </div>
      </HashRouter>

    </>
  )
}
export default Navigation;