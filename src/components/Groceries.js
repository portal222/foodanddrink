import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Groceries = (props) => {

    const [recipe, setRecipe] = useState([]);
    const [error, setError] = useState(null);
    const [dish, setDish] = useState([]);

    const navigate = useNavigate()
    const food = props.food

    useEffect(() => {
        getRecipe(food);
    }, [food]);

    const getRecipe = async () => {

        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${food}`
        const urlDish = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`

        try {

            const response = await axios.get(url);
            const responseDish = await axios.get(urlDish);

            const data = response.data;
            const dataDish = responseDish.data;

            setRecipe(data.meals);
            setDish(dataDish.meals);

            setIsLoading(false);
        } catch (err) {
            setError(err);
        }
    };


    const handleClick = (groceries) => {
        const LinkTo = `/${groceries}`;
        navigate(LinkTo);
    }

    if (recipe == null && dish == null) {
        return (
            <td className="noLink">
                {food}
            </td>
        )
    }

    return (
        <>
            <td className="name"
                onClick={() => {
                    handleClick(food);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            >{food} </td>
        </>
    )


}
export default Groceries;