
import React, { useEffect, useState } from "react";
import groData from "../../public/nutritions.json";
import fruitData from "../../public/fruit.json";
import { useNavigate } from "react-router-dom";

const Calories = () => {

    const [history, setHistory] = useState([]);
    const [inputValues, setInputValues] = useState(() => {
        const savedData = JSON.parse(localStorage.getItem("nutritionData"));
        return savedData?.inputValues || 0;
    });

    const [inputValues2, setInputValues2] = useState(() => {
        const savedData = JSON.parse(localStorage.getItem("nutritionData"));
        return savedData?.inputValues2 || 0;
    });

    const navigate = useNavigate()

    const handleReset = () => {
        localStorage.removeItem("nutritionData");
        setInputValues(0);
        setInputValues2(0);
    };

    const handleResetHistory = () => {
        localStorage.removeItem("dailyCalories");
    };

    const handleInputChange = (id, value) => {
        setInputValues(prevValues => ({
            ...prevValues,
            [id]: value
        }));
    }

    const handleInputChange2 = (id, value) => {
        setInputValues2(prevValues => ({
            ...prevValues,
            [id]: value
        }));
    }

    const handleClick = (groceries) => {
        const LinkTo = `/${groceries}`;
        navigate(LinkTo);
    }

    const totalsFromFruitData = fruitData.reduce((acc, fruit, id) => {
        const grams = parseFloat(inputValues[id]) || 0;
        acc.protein += (grams * fruit.protein);
        acc.carbs += (grams * fruit.carbon);
        acc.fat += (grams * fruit.fat);
        acc.calories += (grams * fruit.calories);
        return acc;
    }, { protein: 0, carbs: 0, fat: 0, calories: 0 });

    const totalsFromGroData = groData.reduce((acc, gro, id) => {
        const grams = parseFloat(inputValues2[id]) || 0;
        acc.protein += (grams * gro.protein);
        acc.carbs += (grams * gro.carbon);
        acc.fat += (grams * gro.fat);
        acc.calories += (grams * gro.calories);
        return acc;
    }, { protein: 0, carbs: 0, fat: 0, calories: 0 });

    const grandTotals = {
        protein: totalsFromFruitData.protein + totalsFromGroData.protein,
        carbs: totalsFromFruitData.carbs + totalsFromGroData.carbs,
        fat: totalsFromFruitData.fat + totalsFromGroData.fat,
        calories: totalsFromFruitData.calories + totalsFromGroData.calories
    };

    useEffect(() => {
        const dataToSave = {
            inputValues,
            inputValues2
        };
        localStorage.setItem("nutritionData", JSON.stringify(dataToSave));
    }, [inputValues, inputValues2]);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("nutritionData"));
        if (savedData) {
            setInputValues(savedData.inputValues || {});
            setInputValues2(savedData.inputValues2 || 0);
        }
    }, []);

    const today = new Date().toISOString().slice(0, 10);
    const dailyCalories = localStorage.getItem("dailyCalories")
        ? JSON.parse(localStorage.getItem("dailyCalories"))
        : {};

    dailyCalories[today] = grandTotals.calories;
    localStorage.setItem("dailyCalories", JSON.stringify(dailyCalories));

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem("dailyCalories")) || {};
        const formatted = Object.entries(savedHistory).map(([date, calories]) => ({
            date,
            calories
        }));
        setHistory(formatted);
    }, []);

    return (
        <>
            <div className="groceries">
                <div className="container">
                    <table >
                        <thead >
                            <tr className="title">
                                <th >Groceries</th>
                                <th >g/ml</th>
                                <th>Protein</th>
                                <th>CH</th>
                                <th>Fat</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody  >
                            {fruitData.map((fruit, id) => {
                                const grams = inputValues[id] || 0;
                                return (
                                    <tr key={id}
                                        className={fruit.category}>
                                        <td className="name"
                                            onClick={() => {
                                                handleClick(fruit.name);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                        >{fruit.name} </td>
                                        <td className="protein">
                                            <input className="inputPro"
                                                type="number"
                                                value={grams}
                                                onChange={e => handleInputChange(id, e.target.value)} />
                                        </td>
                                        <td className="protein">
                                            {(grams * fruit.protein).toFixed(1)}
                                        </td>
                                        <td className="protein">
                                            {(grams * fruit.carbon).toFixed(1)}
                                        </td>
                                        <td className="protein">
                                            {(grams * fruit.fat).toFixed(1)}
                                        </td>
                                        <td className="protein">
                                            {(grams * fruit.calories).toFixed(1)}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="container">
                    <table>
                        <thead >
                            <tr className="title">
                                <th >Groceries</th>
                                <th >g/ml</th>
                                <th>Protein</th>
                                <th>CH</th>
                                <th>Fat</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groData.map((gro, id) => {
                                const grams = inputValues2[id] || 0;
                                return (
                                    <tr key={id}
                                        className={gro.category}>
                                        <td className="name"
                                            onClick={() => {
                                                handleClick(gro.name);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                        >{gro.name} </td>
                                        <td className="protein">
                                            <input className="inputPro"
                                                type="number"
                                                value={grams}
                                                onChange={e => handleInputChange2(id, e.target.value)} />
                                        </td>
                                        <td className="protein">
                                            {(grams * gro.protein).toFixed(1)}
                                        </td>
                                        <td className="protein">
                                            {(grams * gro.carbon).toFixed(1)}
                                        </td>
                                        <td className="protein">
                                            {(grams * gro.fat).toFixed(1)}
                                        </td>
                                        <td className="protein">
                                            {(grams * gro.calories).toFixed(1)}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <tr className="title">
                                <td style={{ padding: "15px" }}>Total:</td>
                                <td></td>
                                <td className="total">{grandTotals.protein.toFixed(1)}</td>
                                <td className="total">{grandTotals.carbs.toFixed(1)}</td>
                                <td className="total">{grandTotals.fat.toFixed(1)}</td>
                                <td className="total">{grandTotals.calories.toFixed(1)}</td>
                            </tr>
                            <tr>
                                <td colSpan={4}></td>
                                <td colSpan={2}>
                                    <button onClick={handleReset}
                                        className="buttReset">
                                        Reset
                                    </button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <div className="groceries">
                <table className="history">
                    <thead>
                        <tr>
                            <th colSpan={2}>Calorie intake history</th>
                        </tr>
                        <tr>
                            <th className="dates">Date</th>
                            <th className="dates">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.date}</td>
                                <td>{entry.calories.toFixed(1)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
            </div>
            <div className="groceries">
                 <div className="resHis">
                    <button onClick={handleResetHistory} className="buttHis">
                        Reset calorie history
                    </button>
                </div>
                </div>
        </>
    )
}
export default Calories;