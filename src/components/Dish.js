import React, { useState, useEffect } from "react";
import axios from 'axios';
import Search from "./Search";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import dish1 from "../../public/assets/img/soup.jpg";
import dish2 from "../../public/assets/img/beef.jpg";
import dish3 from "../../public/assets/img/pad.jpg"
import dish4 from "../../public/assets/img/pork.jpg"
import dish5 from "../../public/assets/img/fish.JPG"
import dish6 from "../../public/assets/img/chicken.JPG"
import dish7 from "../../public/assets/img/bread.JPG"

const Dish = () => {

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



    const areaClick = (area) => {
        const LinkTo2 = `home2/${area}`;
        navigate(LinkTo2);
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
            <div className="food">
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

                    </Slide>
                </div>
            </div>
            <div className="titleLineFood">
                <h1>Search</h1>
                <h1>
                    <hr></hr>
                </h1>
            </div>


            <div className="food">

                <div className="container">
                    <p> Search recipes by name, ingredients and first letter, or choose dishes by country or category </p>

                    <Search />


                </div>


                <div className="container">


                    <div className="area">
                        <p className="countryT">
                            COUNTRY:
                        </p>
                        {area.map((a, id) => (
                            <p key={id}
                                className="country"
                                onClick={() => {
                                    areaClick(a.strArea);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}>
                                {a.strArea}</p>
                        ))}
                    </div>
                    <div className="area">
                        <p className="countryT">
                            CATEGORY:
                        </p>
                        {categories.map((cat, id) => (
                            <p key={id}
                                className="country"
                                onClick={() => {
                                    categClick(cat.strCategory);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}>
                                {cat.strCategory}</p>
                        ))}
                    </div>

                </div>
            </div>
            <div className="food" style={{height: "300px"}}></div>
            



        </>
    )
}
export default Dish;