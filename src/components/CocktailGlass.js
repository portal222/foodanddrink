import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import CocktailsDetails from "./CocktailsDetails";
import PaginationDrink from "./PaginationDrink";
import { Box, Pagination } from "@mui/material";
import { useParams } from "react-router-dom";
import SearchCocktail from "./SearchCocktail";
import Loader from "./Loader";

const CocktailGlass = () => {

    const [cocktails, setCocktails] = useState([]);
    const [glass, setGlass] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const params = useParams()
    const drinkGlass = params.glass;

    const navigate = useNavigate();

    useEffect(() => {
        getCocktails(drinkGlass);
    }, [drinkGlass]);

    const getCocktails = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${drinkGlass}`;
        const urlGlass = `https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`

        try {
            const response = await axios.get(url);
            const responseGlass = await axios.get(urlGlass);
            const data = response.data;
            const dataGlass = responseGlass.data;
            setCocktails(data.drinks);
            setGlass(dataGlass.drinks);
            setIsLoading(false);

        } catch (err) {
            setError(err);
        }
    }

    const filteredElements = glass.filter((_, index) => index !== 22);
    const pageSize = 9;
    const paginatedPosts = PaginationDrink(cocktails, pageSize);
    const currentPosts = paginatedPosts[currentPage - 1];

    const click = (glass) => {
        const LinkTo = `/cocktailGlass/${glass}`;
        navigate(LinkTo);
    }

    if (isLoading) {
        return <Loader />
    }
    return (
        <>
            <div className="titleLineDrink">
                <h1>
                    {drinkGlass}
                </h1>
                <h1>
                    <hr></hr>
                </h1>
            </div>
            <div>
                <Box>
                    <div className="cocktail">
                        {currentPosts &&
                            currentPosts.map((cocktail) => (
                                <div key={cocktail.idDrink} className="cocktails"
                                >
                                    <div className="drink">
                                        <div className="imgCont">

                                            <img src={cocktail.strDrinkThumb} alt="" />
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
                <div className="drinkMain">

                    <div className="container">
                        <p> Search cocktails by name, ingredients and first letter. Or chose drink by tip of glass</p>

                        <SearchCocktail />
                    </div>
                    <div className="container">
                        <div className="area">
                            {filteredElements.slice(0, 30).map((g, id) => (
                                <p key={id} className="glass"
                                    onClick={() => {
                                        click(g.strGlass);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                >
                                    {g.strGlass}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="drinkMain" style={{ height: "300px" }}></div>

            </div>
        </>
    )
}
export default CocktailGlass;