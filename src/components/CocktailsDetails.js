import React, { useState, useEffect } from "react";
import axios from 'axios';


const CocktailsDetails = (props) => {

    const [cocktails, setCocktails] = useState([]);
    const [error, setError] = useState(null);

const drink = props.drinkID
    useEffect(() => {
        getCocktails(drink);
  
    }, [drink]);

    const getCocktails = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink}`

        try {
            const response = await axios.get(url);
            const data = response.data;
         
            setCocktails(data.drinks[0]);
        } catch (err) {
            setError(err);
        }
    }

    return (
     <>
   <table>
    <tbody>
    {cocktails.strCategory && (
        <tr>
            <td colSpan={2}
            className="categ">
                {cocktails.strCategory}     
            </td>
        </tr>
        )}
    {cocktails.strMeasure1 && (
        <tr>
            <td className="measur">
                {cocktails.strMeasure1}   
            </td>
            <td className="ingred">
                {cocktails.strIngredient1}</td>
        </tr>
        )}
         {cocktails.strMeasure2 && (
        <tr>
            <td  className="measur">
                {cocktails.strMeasure2}   
            </td>
            <td className="ingred">{cocktails.strIngredient2}</td>
        </tr>
        )}
         {cocktails.strMeasure3 && (
        <tr>
            <td  className="measur">
                {cocktails.strMeasure3} 
            </td>
            <td className="ingred">{cocktails.strIngredient3}</td>
        </tr>
        )}
         {cocktails.strMeasure4 && (
        <tr>
            <td  className="measur">
                {cocktails.strMeasure4}
            </td>
            <td className="ingred">{cocktails.strIngredient4}</td>
        </tr>
        )}
         {cocktails.strMeasure5 && (
        <tr>
            <td className="measur">
                {cocktails.strMeasure5}
            </td>
            <td className="ingred">{cocktails.strIngredient5}</td>
        </tr>
        )}
         {cocktails.strMeasure6 && (
        <tr>
            <td className="measur">
                {cocktails.strMeasure6}
            </td>
            <td className="ingred">{cocktails.strIngredient6}</td>
        </tr>
        )}
         {cocktails.strMeasure7 && (
        <tr>
            <td className="measur">
                {cocktails.strMeasure7}
            </td>
            <td className="ingred">{cocktails.strIngredient7}</td>
        </tr>
        )}
         {cocktails.strMeasure8 && (
        <tr>
            <td className="measur">
                {cocktails.strMeasure8}
            </td>
            <td className="ingred">{cocktails.strIngredient8}</td>
        </tr>
        )}
         {cocktails.strMeasure9 && (
        <tr>
            <td className="measur">
                {cocktails.strMeasure9}  
            </td>
            <td className="ingred">{cocktails.strIngredient9}</td>
        </tr>
        )}
         {cocktails.strMeasure10 && (
        <tr>
            <td className="measur">
                {cocktails.strMeasure10}  
            </td>
            <td className="ingred">{cocktails.strIngredient10}</td>
        </tr>
        )}
         {cocktails.strMeasure11 && (
        <tr>
            <td className="measur">
                {cocktails.strMeasure11}  
            </td>
            <td className="ingred">{cocktails.strIngredient11}</td>
        </tr>
        )}
         {cocktails.strMeasure12 && (
        <tr>
            <td className="measur">
                {cocktails.strMeasure12}  
            </td>
            <td className="ingred">{cocktails.strIngredient12}</td>
        </tr>
        )}
         {cocktails.strMeasure13 && (
        <tr>
            <td className="measur">
                {cocktails.strMeasure13}  
            </td>
            <td className="ingred">{cocktails.strIngredient13}</td>
        </tr>
        )}
         {cocktails.strMeasure14 && (
        <tr>
            <td className="measur">
                {cocktails.strMeasure14}  
            </td>
            <td className="ingred">{cocktails.strIngredient14}</td>
        </tr>
        )}
         {cocktails.strMeasure15 && (
        <tr>
            <td className="measur">
                {cocktails.strMeasure15}  
            </td>
            <td className="ingred">{cocktails.strIngredient15}</td>
        </tr>
        )}
          <tr>
            <td colSpan={2}
            className="instruc">
                {cocktails.strInstructions}
            </td>
            </tr>
            {cocktails.strGlass && (
            <tr>
         
            <td colSpan={2}
            className="measur" style={{paddingRight: "20px", paddingBottom: "30px"}}
            >{cocktails.strGlass}</td>
        </tr>
        )}
    </tbody>
    </table>
     </>
    )
}
export default CocktailsDetails;