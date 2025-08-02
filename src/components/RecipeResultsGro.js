import React, { useState, useEffect } from "react";
import axios from 'axios';
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const RecipeResultsGro = () => {
    const [error, setError] = useState(null);
    const [recipe, setRecipe] = useState([]);
    const [dish, setDish] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
   
    const navigate = useNavigate()
    const paramas = useParams()
    const groceries = paramas.groceries

    useEffect(() => {
        getRecipe(groceries);
    }, [groceries]);

    const getRecipe = async () => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${groceries}`
        const urlDish = `https://www.themealdb.com/api/json/v1/1/search.php?s=${groceries}`

        try {
            const response = await axios.get(url);
            const responseDish = await axios.get(urlDish);
            const data = response.data;
            const dataDish = responseDish.data;

            setIsLoading(false);
            setRecipe(data.meals);
            setDish(dataDish.meals);
        } catch (err) {
            setError(err);
        }
    };

    const handleClick = (recipeId) => {
        const LinkTo = `/${groceries}/recipe/${recipeId}`;
        navigate(LinkTo);
    }

    if (isLoading) {
        return <Loader />
    } else if (recipe == null && dish == null) {
        return (
            <>    
                      <div className="food">
                    <div className="container">
                        <p>{groceries} not found</p>
                        <Search />
                    </div>
                </div>
                <div className="food" style={{ height: "300px" }}></div>
                <div className="footer"></div>
            </>
        )
    } else if (dish == null) {
        return (
            <>
                <div className="titleLineFood"> 
                    <h1>
                        groceries {groceries}
                    </h1>
                    <h1>
                        <hr></hr>
                    </h1>
                </div>
                <div className="areaMain">
                    {recipe.map((dataObj, id) => (
                        <div key={id} className="results">
                            <div className="recipeResult"
                                onClick={() => {
                                    handleClick(dataObj.idMeal);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            >
                                {dataObj.strMeal}</div>
                            <div>
                                <img className="imgThumb" src={dataObj.strMealThumb} alt=""
                                    onClick={() => {
                                        handleClick(dataObj.idMeal);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="food" style={{ height: "300px" }}></div>
                <div className="footer"></div>
            </>
        )
    } else if (recipe == null) {
        return (
            <>
                <div className="titleLineFood">      
                    <h1>
                        Dish by name {groceries}
                    </h1>
                    <h1>
                        <hr></hr>
                    </h1>
                </div>
                <div className="areaMain">
                    {dish.map((dataObj, id) => (
                        <div key={id} className="results">
                            <div className="recipeResult"
                                onClick={() => {
                                    handleClick(dataObj.idMeal);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            >
                                {dataObj.strMeal}</div>
                            <div>
                                <img className="imgThumb" src={dataObj.strMealThumb} alt=""
                                    onClick={() => {
                                        handleClick(dataObj.idMeal);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="food" style={{ height: "300px" }}></div>
                <div className="footer"></div>
            </>
        )
    }
    return (
        <>
            <div className="titleLineFood">
                <h1>
                    groceries {groceries}
                </h1>
                <h1>
                    <hr></hr>
                </h1>
            </div>
            <div className="areaMain">
                {recipe.map((dataObj, id) => (
                    <div key={id} className="results">
                        <div className="recipeResult"
                            onClick={() => {
                                handleClick(dataObj.idMeal);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            {dataObj.strMeal}</div>
                        <div>
                            <img className="imgThumb" src={dataObj.strMealThumb} alt=""
                                onClick={() => {
                                    handleClick(dataObj.idMeal);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="titleLineFood">
                <h1>
                    Dish by name {groceries}
                </h1>
                <h1>
                    <hr></hr>
                </h1>
            </div>
            <div className="areaMain">
                {dish.map((dataObj, id) => (
                    <div key={id} className="results">
                        <div className="recipeResult"
                            onClick={() => {
                                handleClick(dataObj.idMeal);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            {dataObj.strMeal}</div>
                        <div>
                            <img className="imgThumb" src={dataObj.strMealThumb} alt=""
                                onClick={() => {
                                    handleClick(dataObj.idMeal);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="food" style={{ height: "300px" }}></div>
            <div className="footer"></div>
        </>
    )
}
export default RecipeResultsGro;