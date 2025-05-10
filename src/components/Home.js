import React, { useState, useEffect } from "react";
import axios from 'axios';
import CocktailsDetails from "./CocktailsDetails";
import Search from "./Search";
import SearchCocktail from "./SearchCocktail";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import dish1 from "../../public/assets/img/goblin.jpg"
import dish2 from "../../public/assets/img/lamb.jpg"
import dish3 from "../../public/assets/img/green.jpg"
import dish4 from "../../public/assets/img/bluebird.jpg"
import dish5 from "../../public/assets/img/orange.jpg"
import dish6 from "../../public/assets/img/salad.jpg"
import dish7 from "../../public/assets/img/a1.jpg"
import dish8 from "../../public/assets/img/pie.jpg"
import dish9 from "../../public/assets/img/pasta.jpg"

const Home = () => {

    const [error, setError] = useState(null);
    const [cocktails, setCocktails] = useState([]);
    const [image, setImage] = useState([]);
    const [food, setFood] = useState([]);
    const [area, setArea] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate()

    useEffect(() => {
        getCocktails();
    }, []);


    const getCocktails = async () => {

        const urlName = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
        const urlImg = `https://www.themealdb.com/api/json/v1/1/search.php?f=f`
        const urlRec = `https://www.themealdb.com/api/json/v1/1/random.php`
        const urlArea = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
        const urlCat = `https://www.themealdb.com/api/json/v1/1/categories.php`

        try {
            const responseName = await axios.get(urlName);
            const responseImg = await axios.get(urlImg);
            const responseRec = await axios.get(urlRec);
            const responseArea = await axios.get(urlArea);
            const responseCat = await axios.get(urlCat);

            const dataName = responseName.data
            const dataImg = responseImg.data
            const dataRec = responseRec.data.meals
            const dataArea = responseArea.data.meals
            const dataCat = responseCat.data.categories

            setCocktails(dataName.drinks);
            setImage(dataImg.meals);
            setFood(dataRec);
            setArea(dataArea);
            setCategories(dataCat);

            setIsLoading(false);

        } catch (err) {
            setError(err);
        }
    };

    const handleClick = (recipeId) => {
        const LinkTo = `home/${recipeId}`;
        navigate(LinkTo);
    }

    const categClick = (category) => {
        const LinkTo3 = `home3/${category}`;
        navigate(LinkTo3);
    }


    if (isLoading) {
        return <Loader />
    }
    return (
        <>
            <div className="home">
                <div className="slide-container">
                    <Slide>
                        <div>
                            <img style={{ width: "100%" }} src={dish1} />
                        </div>
                        <div>
                            <img style={{ width: "100%" }} src={dish2} />
                        </div>
                        <div>
                            <img style={{ width: "100%" }} src={dish3} />
                        </div>
                        <div>
                            <img style={{ width: "100%" }} src={dish4} />
                        </div>
                        <div>
                            <img style={{ width: "100%" }} src={dish5} />
                        </div>
                        <div>
                            <img style={{ width: "100%" }} src={dish6} />
                        </div>
                        <div>
                            <img style={{ width: "100%" }} src={dish7} />
                        </div>
                        <div>
                            <img style={{ width: "100%" }} src={dish8} />
                        </div>
                        <div>
                            <img style={{ width: "100%" }} src={dish9} />
                        </div>

                    </Slide>
                </div>
            </div>



            <div className="home">
                <div>
                    <h1>Welcome to</h1>
                    <h2>DISH & DRINK</h2>

                </div>
            </div>
            <div className="titleLine">

                <h1>Today's recommendation</h1>
                <h1>

                    <hr></hr>
                </h1>

            </div>
            <div className="home">


                <div className="suggestion">
                    {food.map((f, id) => (
                        <div key={id} >

                            <div className="drink">
                                <img src={f.strMealThumb}
                                    className="sugestImg"
                                    onClick={() => {
                                        handleClick(f.idMeal);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }} />
                                <p className="drinkLink"
                                    onClick={() => {
                                        handleClick(f.idMeal);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}>
                                    {f.strMeal}</p>

                            </div>
                        </div>
                    ))}


                </div>
                <div className="suggestion">
                    {cocktails.map((cocktail, id) => (
                        <div key={id} >

                            <div className="drink">

                                <img src={cocktail.strDrinkThumb} />
                                <p className="drinkLink">
                                    {cocktail.strDrink}</p>
                                <div className="drinkDown">
                                    <CocktailsDetails drinkID={cocktail.idDrink} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="homeSearch">
                    <div className="cont">
                        <p> Search cocktails and recipes by name, ingredients and first letter</p>
                    </div>
                    <div className="cont">
                        <Search />

                        <SearchCocktail />

                    </div>
                </div>

            </div>
            <div className="titleLine">
                <h1>Dish category</h1>
                <h1>

                    <hr></hr>
                </h1>

            </div>

            <div className="recipe">
                {categories.map((cat, id) => (
                    <div key={id} className="resHome">
                        <div className="category">
                            <div className="recipeName2"
                                onClick={() => {
                                    categClick(cat.strCategory);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            >
                                {cat.strCategory}
                            </div>
                            <div>
                                <img className="imgThumbCat" src={cat.strCategoryThumb} alt=""
                                    onClick={() => {
                                        categClick(cat.strCategory);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }} />
                            </div>
                        </div>
                        <div className="descr">
                            {cat.strCategoryDescription}

                        </div>


                    </div>
                ))}
            </div>



        </>
    )
}
export default Home;