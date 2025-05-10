import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const DetailsRecipe = () => {
    const [error, setError] = useState(null);
    const [recipe, setRecipe] = useState([]);
    const [image, setImage] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams()
    const recipeId = params.recipeId;


    useEffect(() => {
        getRecipe(recipeId);
    }, [recipeId]);

    const getRecipe = async (recipeId) => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`

        try {
            const response = await axios.get(url)
            const data = response.data.meals;

            setRecipe(data);
            setIsLoading(false);

        } catch (err) {
            setError(err);
        }
    };

    if (isLoading) {
        return <Loader />
    } else
    if (recipe == null) {
        return (
            <>
                <table className="areaMain">
                    <thead>
                        <tr>
                            <th>Nothing found</th>
                        </tr>

                    </thead>
                </table>
            <div className="food" style={{height: "300px"}}></div>
                
                </>
        )
    }
    return (
        <>
            <div className="areaMain">

                {recipe.map((rec, id) => (
                    <div key={id}>


                        <div style={{ width: "100%" }}>
                            <div className="recipeName" >

                                {rec.strMeal}
                                <p>
                                    {rec.strArea + " - " + rec.strCategory}
                                </p>
                            </div>
                            <div className="mealImg">
                                <img className="imgMeal" src={rec.strMealThumb} alt="" />
                            </div>
                        </div>
                        <div className="ingPlace">
                        </div>
                        <div className="ingPlace">
                            <div style={{ width: "50%" }}>
                                {rec.strMeasure1 && (
                                    <div className="measPlace">
                                        <div className="measure">{rec.strMeasure1 + " " + rec.strIngredient1}</div>
                                        <div>
                                            <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${rec.strIngredient1}.png`} alt="" />
                                        </div>
                                    </div>
                                )}
                                {rec.strMeasure2 && (
                                    <div className="measPlace">
                                        <div className="measure">{rec.strMeasure2 + " " + rec.strIngredient2}</div>
                                        <div>
                                            <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${rec.strIngredient2}.png`} alt="" />
                                        </div>
                                    </div>
                                )}
                                {rec.strMeasure3 && (
                                    <div className="measPlace">

                                        <div className="measure">{rec.strMeasure3 + " " + rec.strIngredient3}</div>
                                        <div>
                                            <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${rec.strIngredient3}.png`} alt="" />
                                        </div>
                                    </div>
                                )}
                                {rec.strMeasure4 && (
                                    <div className="measPlace">

                                        <div className="measure">{rec.strMeasure4 + " " + rec.strIngredient4}</div>
                                        <div>
                                            <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${rec.strIngredient4}.png`} alt="" />
                                        </div>
                                    </div>
                                )}
                                {rec.strMeasure5 && (
                                    <div className="measPlace">

                                        <div className="measure">{rec.strMeasure5 + " " + rec.strIngredient5}</div>
                                        <div>
                                            <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${rec.strIngredient5}.png`} alt="" />
                                        </div>
                                    </div>
                                )}
                                {rec.strMeasure6 && (
                                    <div className="measPlace">

                                        <div className="measure">{rec.strMeasure6 + " " + rec.strIngredient6}</div>
                                        <div>
                                            <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${rec.strIngredient6}.png`} alt="" />
                                        </div>
                                    </div>
                                )}
                                {rec.strMeasure7 && (
                                    <div className="measPlace">

                                        <div className="measure">{rec.strMeasure7 + " " + rec.strIngredient7}</div>
                                        <div>
                                            <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${rec.strIngredient7}.png`} alt="" />
                                        </div>
                                    </div>
                                )}
                                {rec.strMeasure8 && (
                                    <div className="measPlace">

                                        <div className="measure">{rec.strMeasure8 + " " + rec.strIngredient8}</div>
                                        <div>
                                            <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${rec.strIngredient8}.png`} alt="" />
                                        </div>
                                    </div>
                                )}
                                {rec.strMeasure9 && (
                                    <div className="measPlace">

                                        <div className="measure">{rec.strMeasure9 + " " + rec.strIngredient9}</div>
                                        <div>
                                            <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${rec.strIngredient9}.png`} alt="" />
                                        </div>
                                    </div>
                                )}
                                {rec.strMeasure10 && (
                                    <div className="measPlace">

                                        <div className="measure">{rec.strMeasure10 + " " + rec.strIngredient10}</div>
                                        <div>
                                            <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${rec.strIngredient10}.png`} alt="" />
                                        </div>
                                    </div>
                                )}
                                {rec.strMeasure11 && (
                                    <div className="measPlace">

                                        <div className="measure">{rec.strMeasure11 + " " + rec.strIngredient11}</div>
                                        <div>
                                            <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${rec.strIngredient11}.png`} alt="" />
                                        </div>
                                    </div>
                                )}
                                {rec.strMeasure12 && (
                                    <div className="measPlace">

                                        <div className="measure">{rec.strMeasure12 + " " + rec.strIngredient12}</div>
                                        <div>
                                            <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${rec.strIngredient12}.png`} alt="" />
                                        </div>
                                    </div>
                                )}
                                {rec.strMeasure13 && (
                                    <div className="measPlace">

                                        <div className="measure">{rec.strMeasure13 + " " + rec.strIngredient13}</div>
                                        <div>
                                            <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${rec.strIngredient13}.png`} alt="" />
                                        </div>
                                    </div>
                                )}
                                {rec.strMeasure14 && (
                                    <div className="measPlace">

                                        <div className="measure">{rec.strMeasure14 + " " + rec.strIngredient14}</div>
                                        <div>
                                            <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${rec.strIngredient14}.png`} alt="" />
                                        </div>
                                    </div>
                                )}
                                {rec.strMeasure15 && (
                                    <div className="measPlace">

                                        <div className="measure">{rec.strMeasure15 + " " + rec.strIngredient15}</div>
                                        <div>
                                            <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${rec.strIngredient15}.png`} alt="" />
                                        </div>
                                    </div>
                                )}
                                {rec.strMeasure16 && (
                                    <div className="measPlace">

                                        <div className="measure">{rec.strMeasure16 + " " + rec.strIngredient16}</div>
                                        <div>
                                            <img className="ingImg" src={`https://www.themealdb.com/images/ingredients/${rec.strIngredient16}.png`} alt="" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div style={{ width: "50%" }}>
                                <div className="context">
                                    {rec.strInstructions}
                                </div>
                                <p> watch on
                                    <a href={rec.strYoutube} target="_blank"> YouTube</a>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="food" style={{height: "300px"}}></div>
            
        </>
    );
};
export default DetailsRecipe;