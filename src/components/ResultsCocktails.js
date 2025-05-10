import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import GlobalContext from "./GlobalContext";
import SearchCocktail from "./SearchCocktail";
import CocktailsDetails from "./CocktailsDetails";
import Loader from "./Loader";
import DrinkName from "./DrinkName";
import DrinkIngred from "./DrinkIngred";
import PaginationDrink from "./PaginationDrink";
import { Box, Pagination } from "@mui/material";



const ResultsCocktails = () => {
    const [error, setError] = useState(null);
    const [cocktails, setCocktails] = useState([]);
    const [results, setResults] = useState(1);
    const [results2, setResults2] = useState(1);
    const [cocktail, setCocktail] = useState([]);
    const [image, setImage] = useState([]);
    const [photo, setPhoto] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [resultsFirst, setResultsFirst] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ingredints, setIngredints] = useState([]);

    const globalCtx = useContext(GlobalContext);
    const searchStringValue = globalCtx.searchStringValue;

    useEffect(() => {
        getCocktails(searchStringValue);
        getCocktaName(searchStringValue);
    }, [searchStringValue]);

    const getCocktails = async (searchStringValue) => {
        const url = `https://api.api-ninjas.com/v1/cocktail?name=${searchStringValue}`;
        const urlImg = `https://list.ly/api/v4/search/image?q=${searchStringValue}`;
        const urlIng = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchStringValue}`
        const urlFirst = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchStringValue}`

        try {
            const response = await axios.get(url,
                {
                    headers: {
                        'X-Api-Key': 'D+dYjCxDSm5fEkIqyoCIeA==c2GvujXTiAbMIH05'
                    }
                }
            );
            const responseImg = await axios.get(urlImg);
            const responseIng = await axios.get(urlIng);
            const responseFirst = await axios.get(urlFirst);

            const data = response.data
            const dataImg = responseImg.data
            const dataIng = responseIng.data
            const dataFirst = responseFirst.data
            const length2 = response.data.length

            setCocktail(data);
            setResults2(length2);
            setResultsFirst(dataFirst.length)
            setPhoto(dataImg.results);
            setCocktails(dataFirst.drinks);
            setIsLoading(false);

        } catch (err) {
            setError(err);
        }
    };

    const getCocktaName = async (searchStringValue) => {
        const url = `https://api.api-ninjas.com/v1/cocktail?ingredients=${searchStringValue}`;

        try {
            const response = await axios.get(url,
                {
                    headers: {
                        'X-Api-Key': 'D+dYjCxDSm5fEkIqyoCIeA==c2GvujXTiAbMIH05'
                    }
                }
            );
            const data = response.data;
            const length = response.data.length
            setIngredints(data);
            setResults(length);
        } catch (err) {
            setError(err);
        }
    };

    const pageSize = 9;
    const paginatedPosts = PaginationDrink(cocktails, pageSize);
    const currentPosts = paginatedPosts[currentPage - 1];

    if (isLoading) {
        return <Loader />
    } else if (cocktails === "no data found") {
        <>
            <div className="drinkMain">
                <div className="container">
                    <p>{searchStringValue} not found</p>
                    <SearchCocktail />
                </div>
            </div>
            <div className="drinkMain" style={{ height: "300px" }}></div>
        </>
    }
    else if (cocktails != "no data found") {
        return (
            <>
                <div className="titleLineDrink">
                    <h1>
                        Cocktails by first letter {searchStringValue}
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
                                    color="primary"
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
                <div className="drinkMain" style={{ height: "300px" }}></div>

            </>
        )
    } else if (results === 0 && results2 === 0) {

        return (
            <>

                <div className="drinkMain">
                    <table>
                        <thead>
                            <tr>
                                <th>Nothing found</th>
                            </tr>
                            <tr>
                                <th><SearchCocktail /></th>
                            </tr>

                        </thead>
                    </table>
                </div>
            </>
        )
    }


    return (
        <>
            <div>
                <DrinkName drink={searchStringValue} />
            </div>
            <div>
                <DrinkIngred drink={searchStringValue} />
            </div>
            <div className="drinkGrid">
                <div className="photo">
                    {photo && (
                        <div colSpan={2} >
                            {photo.slice(0, 1).map((img, id) => (
                                <>
                                    <p key={id} >
                                        <img src={img.image} alt="" />
                                    </p>
                                    <p className="subtitle">ilustrated photo</p>
                                </>
                            ))}
                        </div>
                    )}

                </div>
            </div>
            <div className="titleLineDrink">
                <h1>
                    Name {searchStringValue}
                </h1>
                <h1>
                    <hr></hr>
                </h1>
            </div>
            <div className="drinkGrid">

                <div className="cocktailGrid">
                    {cocktail.map((dataName, id) => (
                        <div className="wrap" key={id}>
                            <div
                                className="cocktailName">
                                {dataName.name}
                            </div>
                            <div className="cocktailCont">
                                {dataName.ingredients.map((ing, id) => (

                                    <p key={id}>{ing}</p>
                                ))}
                            </div>
                            <div className="cocktailCont">{dataName.instructions}</div>
                        </div>
                    ))}
                </div>
                <div className="photo">
                    {photo && (
                        <div colSpan={2} >
                            {photo.slice(1, 2).map((img, id) => (
                                <>
                                    <p key={id} >
                                        <img src={img.image} alt="" />
                                    </p>
                                    <p className="subtitle">ilustrated photo</p>
                                </>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="titleLineDrink">
                <h1>
                    Ingedient {searchStringValue}
                </h1>
                <h1>
                    <hr></hr>
                </h1>
            </div>
            <div className="drinkGrid">

                <div className="cocktailGrid">
                    {ingredints.map((dataObj, id) => (
                        <div className="wrap" key={id}>
                            <div
                                className="recipeName"
                            >{dataObj.name}</div>
                            <div className="cocktailCont">

                                {dataObj.ingredients.map((ing, id) => (
                                    <p key={id}>{ing}</p>
                                ))}
                            </div>
                            <div className="cocktailCont">
                                {dataObj.instructions}</div>
                        </div>
                    ))}
                </div>
            </div >
            <div className="drinkMain" style={{ height: "300px" }}></div>
        </>
    );


};
export default ResultsCocktails;