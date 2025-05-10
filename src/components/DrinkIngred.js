import React, { useState, useEffect } from "react";
import axios from 'axios';
import CocktailsDetails from "./CocktailsDetails";
import PaginationDrink from "./PaginationDrink";
import { Box, Pagination } from "@mui/material";

const DrinkIngred = (props) => {
    const [error, setError] = useState(null);
    const [cocktails, setCocktails] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [result, setResult] = useState([]);

    const drinkIngred = props.drink

    useEffect(() => {
        getCocktails(drinkIngred);

    }, [drinkIngred]);

    const getCocktails = async (drinkIngred) => {

        const urlIngred = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinkIngred}`

        try {
            const responseIngred = await axios.get(urlIngred);

            const dataIngred = responseIngred.data

            setCocktails(dataIngred.drinks);
            setResult(dataIngred.length)

            console.log("izbor u DrinkIngrid komp", dataIngred);

        } catch (err) {
            setError(err);

        }

    };

    const pageSize = 6;
    const paginatedPosts = PaginationDrink(cocktails, pageSize);
    const currentPosts = paginatedPosts[currentPage - 1];

    if (cocktails === "no data found") {
        return (
            <>
           
            </>
        )
    } else if (cocktails != "no data found") {

        return (
            <>
              <div className="titleLineDrink">
                <h1>
                    Ingredient {drinkIngred}
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
                                        document.querySelector('.abow').scrollIntoView({ behavior: 'smooth' });
                                    }}
                                />
                            </Box>
                        )}
                    </div>
                </Box>
            </>
        );
    }
};
export default DrinkIngred;