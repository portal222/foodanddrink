import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import GlobalContext from "../../components/GlobalContext";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";


const SpoonacularResult = () => {

    const [error, setError] = useState(null);
    const [meals, setMeals] = useState([]);
    const [offset, setOffset] = useState(0);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);
        const [isLoading, setIsLoading] = useState(true);
    

    const navigate = useNavigate();

    const globalCtx = useContext(GlobalContext);
    const search = globalCtx.searchStringValue;

    useEffect(() => {
        getMeals(0);
    }, [search]);

    const getMeals = async (newOffset = 0) => {
        setLoading(true);

        try {
            const workerUrl = `https://ridlejoke-proxy.kvaka32.workers.dev/spoon-search?query=${encodeURIComponent(search)}&offset=${newOffset}&number=10`;

            const response = await axios.get(workerUrl);

            if (newOffset === 0) {
                setMeals(response.data.results);
            } else {
                setMeals(prev => [...prev, ...response.data.results]);
            }

            setTotalResults(response.data.totalResults);
            setOffset(newOffset + 10);
            setIsLoading(false);


        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const handleClick = (recipeId) => {
        const LinkTo = `spoon/${recipeId}`;
        navigate(LinkTo);
    }

    const loadMore = () => {
        if (!loading && offset < totalResults) {
            getMeals(offset);
        }
    };

        if (isLoading) {
        return <Loader />
    }
    return (
        <>
            <div className="titleLineFood">
                <h1>
                    {totalResults} Recipes for {search}
                </h1>
                <h1>
                    <hr></hr>
                </h1>
            </div>
            <div className="areaMain">
                {meals.map((dataObj, id) => (

                    <div key={id} className="results">

                        <div className="recipeResult"
                            onClick={() => {
                                handleClick(dataObj.id);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            {dataObj.title}</div>
                        <div>
                            <img className="imgThumb" src={dataObj.image} alt=""
                                onClick={() => {
                                    handleClick(dataObj.id);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }} />
                        </div>
                    </div>
                ))}
                <div>
                    {offset < totalResults && (
                        <button onClick={loadMore} disabled={loading} className="moreBut">
                            {loading ? 'LOADING...' : 'MORE RESULTS'}
                        </button>
                    )}
                </div>
            </div>
            <div className="food" style={{ height: "300px" }}></div>
        </>
    )
}
export default SpoonacularResult;