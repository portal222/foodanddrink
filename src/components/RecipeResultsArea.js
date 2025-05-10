import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const RecipeResultsArea = () => {
    const [error, setError] = useState(null);
    const [recipe, setRecipe] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()
    const paramas = useParams()
    const area = paramas.area

    useEffect(() => {
        getRecipe(area);
    }, [area]);

    const getRecipe = async () => {

        const urlArea = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`

        try {
            const responseArea = await axios.get(urlArea);
            const dataArea = responseArea.data;

            setRecipe(dataArea.meals);
            setIsLoading(false);
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
}
export default RecipeResultsArea;