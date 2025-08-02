import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import GlobalContext from "./GlobalContext";
import Loader from "./Loader";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

const RecipeResults = () => {
    const [error, setError] = useState(null);
    const [recipe, setRecipe] = useState([]);
    const [recipe2, setRecipe2] = useState([]);
    const [firstLetter, setFirstLetter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const globalCtx = useContext(GlobalContext);
    const searchStringValue = globalCtx.searchStringValue;

    useEffect(() => {
        getRecipe(searchStringValue);
    }, [searchStringValue]);

    const getRecipe = async (searchStringValue) => {

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchStringValue}`
        const urlIng = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchStringValue}`
        const urlFirst = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchStringValue}`
        const urlArea = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchStringValue}`

        try {
            const response = await axios.get(url);
            const responseIng = await axios.get(urlIng);
            const responseFirst = await axios.get(urlFirst);
            const responseArea = await axios.get(urlArea);

            const data = response.data;
            const dataIng = responseIng.data;
            const dataFirst = responseFirst.data;
            const dataArea = responseArea.data;

            setRecipe(data.meals);
            setRecipe2(dataIng.meals);
            setFirstLetter(dataFirst.meals)
            setIsLoading(false);

        } catch (err) {
            setError(err);
        }
    };

    const handleClick = (recipeId) => {
        const LinkTo = `recipe/${recipeId}`;
        navigate(LinkTo);
    }

    if (isLoading) {
        return <Loader />
    } else if (recipe == null && recipe2 == null && firstLetter == "no data found") {
        return (
            <>
                <div className="food">
                    <div className="container">
                        <p>{searchStringValue} not found</p>
                        <Search />
                    </div>
                </div>
                <div className="food" style={{ height: "300px" }}></div>
                <div className="footer"></div>
            </>
        )
    } else if (recipe2 == null && firstLetter == "no data found") {
        return (
            <>
                <div className="titleLineFood">
                    <h1>
                        Name {searchStringValue}
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
    } else if (recipe == null && firstLetter == "no data found") {
        return (
            <>
                <div className="titleLineFood">
                    <h1>
                        Ingredient {searchStringValue}
                    </h1>
                    <h1>
                        <hr></hr>
                    </h1>
                </div>
                <div className="areaMain">
                    {recipe2.map((dataObj, id) => (
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
    } else if (recipe == null && recipe2 == null) {
        return (
            <>
                <div className="titleLineFood">
                    <h1>
                        Results by first letter {searchStringValue}
                    </h1>
                    <h1>
                        <hr></hr>
                    </h1>
                </div>
                <div className="areaMain">
                    {firstLetter.map((dataObj, id) => (
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
    } else if (recipe2 == null) {
        return (
            <>
                <div className="titleLineFood">
                    <h1>
                        Results by first letter {searchStringValue}
                    </h1>
                    <h1>
                        <hr></hr>
                    </h1>
                </div>
                <div className="areaMain">
                    {firstLetter.map((dataObj, id) => (

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
    } else if (firstLetter == "no data found") {
        return (
            <>
                <div className="titleLineFood">
                    <h1>
                        Name {searchStringValue}
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
                        Ingredient {searchStringValue}
                    </h1>
                    <h1>
                        <hr></hr>
                    </h1>
                </div>
                <div className="areaMain">
                    {recipe2.map((dataObj, id) => (
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
        );
    }
    return (
        <>
            <div className="titleLineFood">
                <h1>
                    Name {searchStringValue}
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
                    Ingredients {searchStringValue}
                </h1>
                <h1>
                    <hr></hr>
                </h1>
            </div>
            <div className="areaMain">
                {recipe2.map((dataObj, id) => (
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
    );
};
export default RecipeResults;