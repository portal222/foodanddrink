import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Search from "./Search";
import Dish from "./Dish";

const RecipeResultsArea = () => {
    const [error, setError] = useState(null);
    const [recipe, setRecipe] = useState([]);
    const [area2, setArea2] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()
    const paramas = useParams()
    const area = paramas.area

    useEffect(() => {
        getRecipe(area);
    }, [area]);

    const getRecipe = async () => {
        const urlArea = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
        const urlArea2 = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
        const urlCat = `https://www.themealdb.com/api/json/v1/1/categories.php`
        try {
            const responseArea = await axios.get(urlArea);
            const responseArea2 = await axios.get(urlArea2);
            const responseCat = await axios.get(urlCat);

            const dataArea = responseArea.data;
            const dataArea2 = responseArea2.data.meals
            const dataCat = responseCat.data.categories

            setRecipe(dataArea.meals);
            setIsLoading(false);
            setArea2(dataArea2);
            setCategories(dataCat);
        } catch (err) {
            setError(err);
        }
    };

    const handleClick = (recipeId) => {
        const LinkTo = `/home2/${area}/recipe/${recipeId}`;
        navigate(LinkTo);
    }

    if (isLoading) {
        return <Loader />
    }
    return (
        <>
            <div className="titleLineFood">
                <h1>{area}</h1>
                <h1>
                    <hr></hr>
                </h1>
            </div>

            {recipe && recipe.length > 0 ? (
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
            ) : (
                <>
                    <div className="food">
                        <p style={{ color: 'gray', fontStyle: 'italic', paddingLeft: '20px' }}>There are currently no recipes for this country.</p>
                    </div>
                    <Dish />
                </>
            )}

            <div className="food" style={{ height: "100px" }}></div>
            <div className="footer"></div>
        </>
    )
}
export default RecipeResultsArea;