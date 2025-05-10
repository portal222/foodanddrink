import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";


const CocktailsClick = () => {
    const [error, setError] = useState(null);
  
    const [results2, setResults2] = useState([]);
    const [cocktail, setCocktail] = useState([]);

    const [photo, setPhoto] = useState([]);
    



    const params = useParams()
    const drink = params.drink;

    useEffect(() => {
        getCocktails(drink);
        getPhoto(drink);
      
    }, [drink]);

    const getCocktails = async (drink) => {
        const urlId = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink}`

        try {
            const responseId = await axios.get(urlId);

            const dataId = responseId.data


        } catch (err) {
            setError(err);

        }

    };

    const getPhoto = (drink) => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";

        try {
            const filterData = url.filter((koktel) => {
                return (
                    koktel.strDrink.toLowerCase().includes(drink.toLowerCase())
                )
            });
            console.log("spisak pretrage koktela", filterData);
        } catch (err) {
            setError(err);
    }
}

   

    if (results2 == 0) {
        return (
            <>
                <div className="recipe">

                    <table>
                        <thead>
                       
                            <tr>
                                <th>Nothing found</th>
                            </tr>

                        </thead>
                    </table>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="recipe">
                <table>
                    <thead >

                        <tr>
                            <th colSpan={2}
                            >
                                Search by Name {drink}: {results2} results
                            </th>
                        </tr>


                    </thead>
                    {cocktail.map((dataName, id) => (
                        <tbody key={id}>
                            <tr>
                                <td colSpan={2}
                                    className="recipeName">
                                    {dataName.name}
                                </td>
                            </tr>
                            <tr>
                                <td className="for">Ingredients:</td>
                                <td className="context">
                                    {dataName.ingredients.map((ing, id) => (

                                        <p key={id}>{ing}</p>
                                    ))}


                                </td>
                            </tr>
                            <tr>

                                <td colSpan={2} className="for">Instructions:</td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="context">{dataName.instructions}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <hr></hr>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </>
    );
};
export default CocktailsClick;