import React, { useState, useEffect } from "react";
import axios from 'axios';
import CocktailsDetails from "./CocktailsDetails";
import PaginationDrink from "./PaginationDrink";
import { Box, Pagination } from "@mui/material";

const DrinkName = (props) => {
    const [error, setError] = useState(null);
    const [cocktails, setCocktails] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [result, setResult] = useState(null)

    const drinkName = props.drink

    useEffect(() => {
        getCocktails(drinkName);
    }, [drinkName]);

    const getCocktails = async (drinkName) => {

        const urlName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`

        try {
            const responseName = await axios.get(urlName);
            const dataName = responseName.data

            setCocktails(dataName.drinks || []);
            setResult(dataName.drinks);

            console.log("po imenu koktela iz DrinkName", dataName);

        } catch (err) {
            setError(err);
        }
    };

    const pageSize = 6;
    const paginatedPosts = PaginationDrink(cocktails, pageSize);
    const currentPosts = paginatedPosts[currentPage - 1];

    if (result === null) {
        return (
            <>
            
            </>
        )
    }

    return (
        <>
            <div className="titleLineDrink">
                <h1>
                    Name {drinkName}
                </h1>
                <h1>
                    <hr></hr>
                </h1>
            </div>

            <Box>
                <div className="cocktail">
                    {currentPosts &&
                        currentPosts.map((cocktail) => (
                            <div key={cocktail.idDrink} className="cocktails"
                            >
                                <div className="drink">
                                    <div className="imgCont">
                                        <img src={cocktail.strDrinkThumb} />
                                    </div>

                                    <p className="drinkLink">
                                        {cocktail.strDrink}</p>
                                    <div className="inerShadow">
                                    </div>
                                    <div className="drinkDown">
                                        <CocktailsDetails drinkID={cocktail.idDrink} />
                                    </div>
                                </div>
                                <hr></hr>


                            </div>
                        ))}
                </div>
                <div className="recipe">
                    {paginatedPosts.length > 1 && (
                        <Box mt={2} display="flex" justifyContent="center" className="paginDrink">
                            <Pagination
                                count={paginatedPosts.length}
                                page={currentPage}
                                siblingCount={0}
                                onChange={(_, newPage) => {
                                    setCurrentPage(newPage);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            />
                        </Box>
                    )}
                </div>
            </Box>
        </>
    );
};
export default DrinkName;