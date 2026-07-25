import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Loader from "../Loader";
import { useParams } from "react-router-dom";
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';
import Search from "../Search";

const SpoonacularRecipe = () => {

    const [error, setError] = useState(null);
    const [meals, setMeals] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const params = useParams()
    const recId = params.recipeId;

    useEffect(() => {
        getMeals(recId);
    }, [recId]);

    const getMeals = async () => {

        const workerUrl = `https://ridlejoke-proxy.kvaka32.workers.dev/spoon-recipe?recId=${encodeURIComponent(recId)}`;

        try {
            const response = await axios.get(workerUrl);
            setMeals(response.data);
            setIngredients(response.data.extendedIngredients);
            setIsLoading(false);

        } catch (err) {
            setError(err);
        }
    }

    if (isLoading) {
        return <Loader />
    }
    return (
        <>

            <div className="areaMain">
                <div style={{ width: "100%" }}>
                    <div className="recipeName" >

                        {meals.title}

                    </div>
                    <div className="mealImg">
                        <img className="imgMeal" src={meals.image} alt="" />
                    </div>
                </div>
                <div className="ingPlace"></div>
                <div className="ingPlace">
                    <div style={{ width: "50%" }}>
                        {ingredients.map((ing, id) => (

                            <div key={id} className="measPlace">
                                <div className="measure"
                                    style={{ paddingTop: "10px" }}>
                                    {ing.measures.metric.amount + " " + ing.measures.metric.unitShort + " " + ing.name}
                                </div>
                                <div style={{ backgroundColor: "white" }}>
                                    <img className="ingImg" src={`https://spoonacular.com/cdn/ingredients_250x250/${ing.image}`} alt="" />
                                </div>

                            </div>
                        ))}
                        <div className="ingSearch">
                            <Search />
                        </div>
                    </div>
                    <div style={{ width: "50%" }}>
                        <div className="serving" >
                            <p className="time">
                                <DiningOutlinedIcon fontSize="large" />  {meals.servings}
                            </p>
                            <p className="time">
                                <AccessAlarmsOutlinedIcon fontSize="large" /> {meals.readyInMinutes}
                            </p>
                        </div>
                        <div className="context" dangerouslySetInnerHTML={{ __html: (meals.instructions) }}>
                        </div>
                        <div className="summary" dangerouslySetInnerHTML={{ __html: (meals.summary) }}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="food" style={{ height: "200px" }}></div>
        </>
    )
}
export default SpoonacularRecipe;