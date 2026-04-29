import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CocktailName = (props) => {
    const [error, setError] = useState(null);
    const [cocktail, setCocktail] = useState([]);
    const [results, setResults] = useState([]);

    const navigate = useNavigate();

    const drink = props.drink

    useEffect(() => {
        getDrink();
    }, []);

    const getDrink = async () => {
  try {
    const response = await axios.post("/.netlify/functions/drink", {
      drink
    });

    const data = response.data;
    setCocktail(data);
    setResults(data.length);
  } catch (err) {
    setError(err);
  }
};


    const click = (drink) => {
        const LinkTo = `/cocktailName/${drink}`;
        navigate(LinkTo);
    }

    if (results == 0) {
        return (<>
            <p className="drink">
                {drink}
            </p>
        </>)
    }

    return (
        <>
            <p 
                className="drinkLink"
                onClick={() => {
                    click(drink);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                {drink}
            </p>
        </>
    );
};
export default CocktailName;