
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Groceries from "./Groceries";
import axios from "axios";
import groData from "../../public/nutritions.json"

const CaloriesOld = () => {

    const [fruit, setFruit] = useState([]);
    const [error, setError] = useState(null);

    const [inputValues, setInputValues] = useState({});
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");
    const [inputValue4, setInputValue4] = useState("");
    const [inputValue5, setInputValue5] = useState("");
    const [inputValue6, setInputValue6] = useState("");
    const [inputValue7, setInputValue7] = useState("");
    const [inputValue8, setInputValue8] = useState("");
    const [inputValue9, setInputValue9] = useState("");
    const [inputValue10, setInputValue10] = useState("");
    const [inputValue11, setInputValue11] = useState("");
    const [inputValue12, setInputValue12] = useState("");
    const [inputValue13, setInputValue13] = useState("");
    const [inputValue14, setInputValue14] = useState("");
    const [inputValue15, setInputValue15] = useState("");
    const [inputValue16, setInputValue16] = useState("");
    const [inputValue17, setInputValue17] = useState("");
    const [inputValue18, setInputValue18] = useState("");
    const [inputValue19, setInputValue19] = useState("");
    const [inputValue20, setInputValue20] = useState("");
    const [inputValue21, setInputValue21] = useState("");
    const [inputValue22, setInputValue22] = useState("");
    const [inputValue23, setInputValue23] = useState("");
    const [inputValue24, setInputValue24] = useState("");
    const [inputValue25, setInputValue25] = useState("");
    const [inputValue26, setInputValue26] = useState("");
    const [inputValue27, setInputValue27] = useState("");
    const [inputValue28, setInputValue28] = useState("");
    const [inputValue29, setInputValue29] = useState("");
    const [inputValue30, setInputValue30] = useState("");
    const [inputValue31, setInputValue31] = useState("");
    const [inputValue32, setInputValue32] = useState("");
    const [inputValue33, setInputValue33] = useState("");
    const [inputValue34, setInputValue34] = useState("");
    const [inputValue35, setInputValue35] = useState("");
    const [inputValue36, setInputValue36] = useState("");
    const [inputValue37, setInputValue37] = useState("");
    const [inputValue38, setInputValue38] = useState("");
    const [inputValue39, setInputValue39] = useState("");
    const [inputValue40, setInputValue40] = useState("");
    const [inputValue41, setInputValue41] = useState("");
    const [inputValue42, setInputValue42] = useState("");
    const [inputValue43, setInputValue43] = useState("");
    const [inputValue44, setInputValue44] = useState("");
    const [inputValue45, setInputValue45] = useState("");
    const [inputValue46, setInputValue46] = useState("");
    const [inputValue47, setInputValue47] = useState("");
    const [inputValue48, setInputValue48] = useState("");
    const [inputValue49, setInputValue49] = useState("");
    const [inputValue50, setInputValue50] = useState("");
    const [inputValue51, setInputValue51] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getFruit();
    }, []);

    const getFruit = async () => {

        const url = `https://www.fruityvice.com/api/fruit/all`;

        try {
            const response = await axios.get(url);
            const data = response.data;
            setFruit(data);

            console.log("podaci o vocu", data);
        } catch (err) {
            setError(err);
        }
    }


    const handleInputChange = (id, value) => {
        setInputValues(prevValues => ({
            ...prevValues,
            [id]: value
        }));
    }
    const handleChangeValue1 = (e) => {
        setInputValue1(e.target.value)
    }
    const handleChangeValue2 = (e) => {
        setInputValue2(e.target.value)
    }
    const handleChangeValue3 = (e) => {
        setInputValue3(e.target.value)
    }
    const handleChangeValue4 = (e) => {
        setInputValue4(e.target.value)
    }
    const handleChangeValue5 = (e) => {
        setInputValue5(e.target.value)
    }
    const handleChangeValue6 = (e) => {
        setInputValue6(e.target.value)
    }
    const handleChangeValue7 = (e) => {
        setInputValue7(e.target.value)
    }
    const handleChangeValue8 = (e) => {
        setInputValue8(e.target.value)
    }
    const handleChangeValue9 = (e) => {
        setInputValue9(e.target.value)
    }
    const handleChangeValue10 = (e) => {
        setInputValue10(e.target.value)
    }
    const handleChangeValue11 = (e) => {
        setInputValue11(e.target.value)
    }
    const handleChangeValue12 = (e) => {
        setInputValue12(e.target.value)
    }
    const handleChangeValue13 = (e) => {
        setInputValue13(e.target.value)
    }
    const handleChangeValue14 = (e) => {
        setInputValue14(e.target.value)
    }
    const handleChangeValue15 = (e) => {
        setInputValue15(e.target.value)
    }
    const handleChangeValue16 = (e) => {
        setInputValue16(e.target.value)
    }
    const handleChangeValue17 = (e) => {
        setInputValue17(e.target.value)
    }
    const handleChangeValue18 = (e) => {
        setInputValue18(e.target.value)
    }
    const handleChangeValue19 = (e) => {
        setInputValue19(e.target.value)
    }
    const handleChangeValue20 = (e) => {
        setInputValue20(e.target.value)
    }
    const handleChangeValue21 = (e) => {
        setInputValue21(e.target.value)
    }
    const handleChangeValue22 = (e) => {
        setInputValue22(e.target.value)
    }
    const handleChangeValue23 = (e) => {
        setInputValue23(e.target.value)
    }
    const handleChangeValue24 = (e) => {
        setInputValue24(e.target.value)
    }
    const handleChangeValue25 = (e) => {
        setInputValue25(e.target.value)
    }
    const handleChangeValue26 = (e) => {
        setInputValue26(e.target.value)
    }
    const handleChangeValue27 = (e) => {
        setInputValue27(e.target.value)
    }
    const handleChangeValue28 = (e) => {
        setInputValue28(e.target.value)
    }
    const handleChangeValue29 = (e) => {
        setInputValue29(e.target.value)
    }
    const handleChangeValue30 = (e) => {
        setInputValue30(e.target.value)
    }
    const handleChangeValue31 = (e) => {
        setInputValue31(e.target.value)
    }
    const handleChangeValue32 = (e) => {
        setInputValue32(e.target.value)
    }
    const handleChangeValue33 = (e) => {
        setInputValue33(e.target.value)
    }
    const handleChangeValue34 = (e) => {
        setInputValue34(e.target.value)
    }
    const handleChangeValue35 = (e) => {
        setInputValue35(e.target.value)
    }
    const handleChangeValue36 = (e) => {
        setInputValue36(e.target.value)
    }
    const handleChangeValue37 = (e) => {
        setInputValue37(e.target.value)
    }
    const handleChangeValue38 = (e) => {
        setInputValue38(e.target.value)
    }
    const handleChangeValue39 = (e) => {
        setInputValue39(e.target.value)
    }
    const handleChangeValue40 = (e) => {
        setInputValue40(e.target.value)
    }
    const handleChangeValue41 = (e) => {
        setInputValue41(e.target.value)
    }
    const handleChangeValue42 = (e) => {
        setInputValue42(e.target.value)
    }
    const handleChangeValue43 = (e) => {
        setInputValue43(e.target.value)
    }
    const handleChangeValue44 = (e) => {
        setInputValue44(e.target.value)
    }
    const handleChangeValue45 = (e) => {
        setInputValue45(e.target.value)
    }
    const handleChangeValue46 = (e) => {
        setInputValue46(e.target.value)
    }
    const handleChangeValue47 = (e) => {
        setInputValue47(e.target.value)
    }
    const handleChangeValue48 = (e) => {
        setInputValue48(e.target.value)
    }
    const handleChangeValue49 = (e) => {
        setInputValue49(e.target.value)
    }
    const handleChangeValue50 = (e) => {
        setInputValue50(e.target.value)
    }
    const handleChangeValue51 = (e) => {
        setInputValue51(e.target.value)
    }

    const rice = "Rice"
    const oatmeal = "Oatmeal"
    const potato = "Potato"
    const corn = "Corn"
    const spaghetti = "Spaghetti"
    const lens = "Lens"
    const peas = "Peas"
    const bean = "Bean"
    const tuna = "Tuna"
    const Chicken = "Chicken"
    const Turkey = "Turkey"
    const beef = "Lean beef"
    const Beef = "Beef"
    const pork = "Pork"
    const egg = "Egg"
    const Butter = "Butter"
    const Milk = "Milk"
    const cheese = "Young cheese"
    const Yogurt = "Yogurt"
    const Parmesan = "Parmesan"
    const Oliveoil = "Olive oil"
    const olives = "Green Olives"
    const Coconutoil = "Coconut oil"
    const Coconut = "Coconut"
    const Almond = "Almonds"
    const Hazelnut = "Hazelnuts"
    const Walnut = "Walnuts"
    const Sunflower = "Sunflower seeds"
    const Flax = "Flax seed"
    const Banana = "Banana"
    const Apple = "Apples"
    const Orange = "Orange"
    const Melon = "Melon"
    const Grapefruit = "Grapefruit"
    const Pineapple = "Pineapple"
    const Raisins = "Raisins"
    const Cabbage = "Cabbage"
    const Carrot = "Carrot"
    const Beetroot = "Beetroot"
    const Broccoli = "Broccoli"
    const Kale = "Kale"
    const Spinach = "Spinach"
    const Zucchini = "Zucchini"
    const Leek = "Leek"
    const Eggplant = "Eggplant"
    const Tomato = "Tomato"
    const Tomatojuice = "Tomato juice"
    const Redwine = "Red wine"
    const beer = "Light beer"
    const Brandy = "Brandy"


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
                            {fruit.map((fr, id) => {
                                const grams = inputValues[id] || 0;
                                return (
                                    <tr key={id}
                                        className="hydrates">

                                        <Groceries food={fr.name} />
                                        <td className="protein">
                                            <input className="inputPro"
                                                type="number"
                                                value={grams}
                                                onChange={e => handleInputChange(id, e.target.value)} />
                                        </td>
                                        <td className="protein">
                                            {((grams * fr.nutritions.protein) / 100).toFixed(1)}
                                        </td>
                                        <td className="protein">
                                            {((grams * fr.nutritions.carbohydrates) / 100).toFixed(1)}
                                        </td>
                                        <td className="protein">
                                            {((grams * fr.nutritions.fat) / 100).toFixed(1)}
                                        </td>
                                        <td className="protein">
                                            {((grams * fr.nutritions.calories) / 100).toFixed(1)}
                                        </td>
                                    </tr>
                                )
                            })}


{groData.map((gro, id) => {
                                const grams = inputValues[id] || 0;
                                return (
                                    <tr key={id}
                                        className="hydrates">

                                        <Groceries food={gro.name} />
                                        <td className="protein">
                                            <input className="inputPro"
                                                type="number"
                                                value={grams}
                                                onChange={e => handleInputChange(id, e.target.value)} />
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


                            <tr className="hydrates">
                                <Groceries food={rice} />
                                <td className="protein">
                                    <input className="inputPro"
                                        name="value1" type="number"
                                        value={inputValue1}
                                        onChange={handleChangeValue1} />
                                </td>
                                <td className="protein">
                                    {(inputValue1 * 0.076).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue1 * 0.78).toFixed(1)}
                                </td>
                                <td className="protein">
                                </td>
                                <td className="protein">
                                    {(inputValue1 * 3.51).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="hydrates">
                                <Groceries food={oatmeal} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value2"
                                        value={inputValue2}
                                        onChange={handleChangeValue2} />
                                </td>
                                <td className="protein">
                                    {(inputValue2 * 0.139).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue2 * 0.644).toFixed(1)}
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue2 * 3.74).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="hydrates">
                                <Groceries food={potato} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value3"
                                        value={inputValue3}
                                        onChange={handleChangeValue3} />
                                </td>
                                <td className="protein">
                                    {(inputValue3 * 0.09).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue3 * 0.2).toFixed(1)}
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue3 * 0.85).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="hydrates">

                                <Groceries food={corn} />

                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value4"
                                        value={inputValue4}
                                        onChange={handleChangeValue4} />
                                </td>
                                <td className="protein">
                                    {(inputValue4 * 0.07).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue4 * 0.77).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue4 * 0.015).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue4 * 3.5).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="hydrates">


                                <Groceries food={spaghetti} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value5"
                                        value={inputValue5}
                                        onChange={handleChangeValue5} />
                                </td>
                                <td className="protein">
                                    {(inputValue5 * 0.12).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue5 * 0.63).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue5 * 0.018).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue5 * 3.37).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="prot">
                                <Groceries food={lens} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value6"
                                        value={inputValue6}
                                        onChange={handleChangeValue6} />
                                </td>
                                <td className="protein">
                                    {(inputValue6 * 0.25).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue6 * 0.6).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue6 * 0.01).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue6 * 3.4).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="prot">

                                <Groceries food={peas} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value7"
                                        value={inputValue7}
                                        onChange={handleChangeValue7} />
                                </td>
                                <td className="protein">
                                    {(inputValue7 * 0.22).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue7 * 0.56).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue7 * 0.01).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue7 * 3.1).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="prot">
                                <Groceries food={bean} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value8"
                                        value={inputValue8}
                                        onChange={handleChangeValue8} />
                                </td>
                                <td className="protein">
                                    {(inputValue8 * 0.21).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue8 * 0.45).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue8 * 0.016).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue8 * 2.7).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="prot">
                                <Groceries food={tuna} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value9"
                                        value={inputValue9}
                                        onChange={handleChangeValue9} />
                                </td>
                                <td className="protein">
                                    {(inputValue9 * 0.23).toFixed(1)}
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue9 * 0.209).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue9 * 2.84).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="prot">
                                <Groceries food={Chicken} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value10"
                                        value={inputValue10}
                                        onChange={handleChangeValue10} />
                                </td>
                                <td className="protein">
                                    {(inputValue10 * 0.208).toFixed(1)}
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue10 * 0.068).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue10 * 1.45).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="prot">
                                <Groceries food={Turkey} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value11"
                                        value={inputValue11}
                                        onChange={handleChangeValue11} />
                                </td>
                                <td className="protein">
                                    {(inputValue11 * 0.19).toFixed(1)}
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue11 * 0.01).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue11 * 0.95).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="prot">
                                <Groceries food={beef} />


                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value12"
                                        value={inputValue12}
                                        onChange={handleChangeValue12} />
                                </td>
                                <td className="protein">
                                    {(inputValue12 * 0.195).toFixed(1)}
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue12 * 0.125).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue12 * 1.19).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="prot">
                                {/* <td className="name"
                                    onClick={() => {
                                        handleClick(Beef);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                >{Beef} (leg)</td> */}
                                <Groceries food={Beef} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value13"
                                        value={inputValue13}
                                        onChange={handleChangeValue13} />
                                </td>
                                <td className="protein">
                                    {(inputValue13 * 0.195).toFixed(1)}
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue13 * 0.125).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue13 * 1.91).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="prot">
                                <Groceries food={pork} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value14"
                                        value={inputValue14}
                                        onChange={handleChangeValue14} />
                                </td>
                                <td className="protein">
                                    {(inputValue14 * 0.2).toFixed(1)}
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue14 * 0.09).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue14 * 1.61).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="prot">
                                <Groceries food={egg} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value15"
                                        value={inputValue15}
                                        onChange={handleChangeValue15} />
                                </td>
                                <td className="protein">
                                    {(inputValue15 * 6).toFixed(1)}
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue15 * 5).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue15 * 55 * 1.62).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="milk">
                                <Groceries food={Butter} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value16"
                                        value={inputValue16}
                                        onChange={handleChangeValue16} />
                                </td>
                                <td className="protein">
                                    {(inputValue16 * 0.01).toFixed(1)}
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue16 * 0.83).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue16 * 7.5).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="milk">
                                <Groceries food={Milk} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value17"
                                        value={inputValue17}
                                        onChange={handleChangeValue17} />
                                </td>
                                <td className="protein">
                                    {(inputValue17 * 0.03).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue17 * 0.045).toFixed(1)}

                                </td>
                                <td className="protein">
                                    {(inputValue17 * 0.28).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue17 * 0.56).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="milk">
                                <Groceries food={cheese} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value18"
                                        value={inputValue18}
                                        onChange={handleChangeValue18} />
                                </td>
                                <td className="protein">
                                    {(inputValue18 * 0.125).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue18 * 0.04).toFixed(1)}

                                </td>
                                <td className="protein">
                                    {(inputValue18 * 0.055).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue18 * 1.15).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="milk">

                                <Groceries food={Yogurt} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value19"
                                        value={inputValue19}
                                        onChange={handleChangeValue19} />
                                </td>
                                <td className="protein">
                                    {(inputValue19 * 0.032).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue19 * 0.035).toFixed(1)}

                                </td>
                                <td className="protein">
                                    {(inputValue19 * 0.028).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue19 * 0.52).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="milk">

                                <Groceries food={Parmesan} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value20"
                                        value={inputValue20}
                                        onChange={handleChangeValue20} />
                                </td>
                                <td className="protein">
                                    {(inputValue20 * 0.43).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue20 * 0.03).toFixed(1)}

                                </td>
                                <td className="protein">
                                    {(inputValue20 * 0.35).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue20 * 5).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="oil">
                                <Groceries food={Oliveoil} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value21"
                                        value={inputValue21}
                                        onChange={handleChangeValue21} />
                                </td>
                                <td className="protein">
                                </td>
                                <td className="protein">
                                </td>
                                <td className="protein">
                                    {(inputValue21 * 1).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue21 * 8.84).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="oil">

                                <Groceries food={olives} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value22"
                                        value={inputValue22}
                                        onChange={handleChangeValue22} />
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">


                                </td>
                                <td className="protein">
                                    {(inputValue22 * 0.14).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue22 * 1.46).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="oil">

                                <Groceries food={Coconutoil} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value23"
                                        value={inputValue23}
                                        onChange={handleChangeValue23} />
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">


                                </td>
                                <td className="protein">
                                    {(inputValue23 * 1).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue23 * 8.9).toFixed(1)}
                                </td>
                            </tr>
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
                            <tr className="almond">

                                <Groceries food={Coconut} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value24"
                                        value={inputValue24}
                                        onChange={handleChangeValue24} />
                                </td>
                                <td className="protein">
                                    {(inputValue24 * 0.03).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue24 * 0.15).toFixed(1)}

                                </td>
                                <td className="protein">
                                    {(inputValue24 * 0.335).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue24 * 3.54).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="almond">

                                <Groceries food={Almond} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value25"
                                        value={inputValue25}
                                        onChange={handleChangeValue25} />
                                </td>
                                <td className="protein">
                                    {(inputValue25 * 0.22).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue25 * 0.2).toFixed(1)}

                                </td>
                                <td className="protein">
                                    {(inputValue25 * 0.54).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue25 * 6.34).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="almond">
                                <Groceries food={Walnut} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value26"
                                        value={inputValue26}
                                        onChange={handleChangeValue26} />
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">


                                </td>
                                <td className="protein">
                                    {(inputValue26 * 0.622).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue26 * 6.77).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="almond">

                                <Groceries food={Hazelnut} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value27"
                                        value={inputValue27}
                                        onChange={handleChangeValue27} />
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">


                                </td>
                                <td className="protein">
                                    {(inputValue27 * 0.605).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue27 * 6.57).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="almond">
                                <Groceries food={Sunflower} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value28"
                                        value={inputValue28}
                                        onChange={handleChangeValue28} />
                                </td>
                                <td className="protein">
                                    {(inputValue28 * 0.2).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue28 * 0.2).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue28 * 0.515).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue28 * 5.84).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="almond">
                                <Groceries food={Flax} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value29"
                                        value={inputValue29}
                                        onChange={handleChangeValue29} />
                                </td>
                                <td className="protein">
                                    {(inputValue29 * 0.18).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue29 * 0.28).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue29 * 0.42).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue29 * 5.34).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="fruit">
                                <Groceries food={Banana} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value30"
                                        value={inputValue30}
                                        onChange={handleChangeValue30} />
                                </td>
                                <td className="protein">
                                    {(inputValue30 * 0.01).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue30 * 0.23).toFixed(1)}
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue30 * 0.89).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="fruit">
                                <Groceries food={Apple} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value31"
                                        value={inputValue31}
                                        onChange={handleChangeValue31} />
                                </td>
                                <td className="protein">
                                </td>
                                <td className="protein">
                                    {(inputValue31 * 0.13).toFixed(1)}

                                </td>
                                <td className="protein">
                                </td>
                                <td className="protein">
                                    {(inputValue31 * 0.5).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="fruit">
                                <Groceries food={Orange} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value32"
                                        value={inputValue32}
                                        onChange={handleChangeValue32} />
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue32 * 0.117).toFixed(1)}

                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue32 * 0.47).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="fruit">
                                <Groceries food={Melon} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value33"
                                        value={inputValue33}
                                        onChange={handleChangeValue33} />
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue33 * 0.816).toFixed(1)}

                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue33 * 0.34).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="fruit">
                                <Groceries food={Grapefruit} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value34"
                                        value={inputValue34}
                                        onChange={handleChangeValue34} />
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue34 * 0.07).toFixed(1)}

                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue34 * 0.28).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="fruit">
                                <Groceries food={Pineapple} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value35"
                                        value={inputValue35}
                                        onChange={handleChangeValue35} />
                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue35 * 0.126).toFixed(1)}

                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue35 * 0.48).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="fruit">
                                <Groceries food={Raisins} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value36"
                                        value={inputValue36}
                                        onChange={handleChangeValue36} />
                                </td>
                                <td className="protein">
                                    {(inputValue36 * 0.016).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue36 * 0.66).toFixed(1)}

                                </td>
                                <td className="protein">
                                    {(inputValue36 * 0.01).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue36 * 2.7).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="carrot">
                                <Groceries food={Cabbage} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value37"
                                        value={inputValue37}
                                        onChange={handleChangeValue37} />
                                </td>
                                <td className="protein">
                                    {(inputValue37 * 0.02).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue37 * 0.03).toFixed(1)}

                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue37 * 0.22).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="carrot">

                                <Groceries food={Carrot} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value38"
                                        value={inputValue38}
                                        onChange={handleChangeValue38} />
                                </td>
                                <td className="protein">
                                    {(inputValue38 * 0.01).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue38 * 0.09).toFixed(1)}

                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue38 * 0.4).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="carrot">

                                <Groceries food={Beetroot} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value39"
                                        value={inputValue39}
                                        onChange={handleChangeValue39} />
                                </td>
                                <td className="protein">
                                    {(inputValue39 * 0.016).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue39 * 0.1).toFixed(1)}

                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue39 * 0.43).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="carrot">

                                <Groceries food={Broccoli} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value40"
                                        value={inputValue40}
                                        onChange={handleChangeValue40} />
                                </td>
                                <td className="protein">
                                    {(inputValue40 * 0.03).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue40 * 0.07).toFixed(1)}

                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue40 * 0.34).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="carrot">

                                <Groceries food={Kale} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value41"
                                        value={inputValue41}
                                        onChange={handleChangeValue41} />
                                </td>
                                <td className="protein">
                                    {(inputValue41 * 0.02).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue41 * 0.1).toFixed(1)}

                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue41 * 0.5).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="carrot">
                                <Groceries food={Spinach} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value42"
                                        value={inputValue42}
                                        onChange={handleChangeValue42} />
                                </td>
                                <td className="protein">
                                    {(inputValue42 * 0.029).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue42 * 0.036).toFixed(1)}

                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue42 * 0.23).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="carrot">
                                <Groceries food={Zucchini} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value43"
                                        value={inputValue43}
                                        onChange={handleChangeValue43} />
                                </td>
                                <td className="protein">
                                    {(inputValue43 * 0.01).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue43 * 0.03).toFixed(1)}

                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue43 * 0.16).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="carrot">
                                <Groceries food={Leek} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value44"
                                        value={inputValue44}
                                        onChange={handleChangeValue44} />
                                </td>
                                <td className="protein">
                                    {(inputValue44 * 0.01).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue44 * 0.14).toFixed(1)}

                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue44 * 0.61).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="carrot">

                                <Groceries food={Eggplant} />

                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value45"
                                        value={inputValue45}
                                        onChange={handleChangeValue45} />
                                </td>
                                <td className="protein">
                                    {(inputValue45 * 0.011).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue45 * 0.029).toFixed(1)}

                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue45 * 0.16).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="carrot">

                                <Groceries food={Tomato} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value46"
                                        value={inputValue46}
                                        onChange={handleChangeValue46} />
                                </td>
                                <td className="protein">
                                    {(inputValue46 * 0.0088).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue46 * 0.039).toFixed(1)}

                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue46 * 0.18).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="carrot">
                                <Groceries food={Tomatojuice} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value47"
                                        value={inputValue47}
                                        onChange={handleChangeValue47} />
                                </td>
                                <td className="protein">
                                    {(inputValue47 * 0.008).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(inputValue47 * 0.059).toFixed(1)}

                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue47 * 0.27).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="alcohol">
                                <Groceries food={Redwine} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value48"
                                        value={inputValue48}
                                        onChange={handleChangeValue48} />
                                </td>
                                <td className="protein">
                                </td>
                                <td className="protein">
                                    {(inputValue48 * 0.026).toFixed(1)}

                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue48 * 0.85).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="alcohol">

                                <Groceries food={beer} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value49"
                                        value={inputValue49}
                                        onChange={handleChangeValue49} />
                                </td>
                                <td className="protein">
                                </td>
                                <td className="protein">
                                    {(inputValue49 * 0.035).toFixed(1)}

                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue49 * 0.43).toFixed(1)}
                                </td>
                            </tr>
                            <tr className="alcohol">

                                <Groceries food={Brandy} />
                                <td className="protein">
                                    <input className="inputPro"
                                        type="number"
                                        name="value50"
                                        value={inputValue50}
                                        onChange={handleChangeValue50} />
                                </td>
                                <td className="protein">
                                </td>
                                <td className="protein">


                                </td>
                                <td className="protein">

                                </td>
                                <td className="protein">
                                    {(inputValue50 * 3.5).toFixed(1)}
                                </td>
                            </tr>

                        </tbody>
                        <tfoot>
                            <tr className="title">
                                <td style={{ padding: "20px" }}>Total</td>
                                <td></td>
                                <td className="protein">
                                    {(Number(inputValue1 * 0.076) + Number(inputValue2 * 0.139) + Number(inputValue3 * 0.09) + Number(inputValue4 * 0.07)
                                        + Number(inputValue5 * 0.012) + Number(inputValue6 * 0.25) + Number(inputValue7 * 0.22) + Number(inputValue8 * 0.21)
                                        + Number(inputValue9 * 0.023) + Number(inputValue10 * 0.208) + Number(inputValue11 * 0.19) + Number(inputValue12 * 0.195)
                                        + Number(inputValue13 * 0.195) + Number(inputValue14 * 0.2) + Number(inputValue15 * 6) + Number(inputValue16 * 0.01)
                                        + Number(inputValue17 * 0.03) + Number(inputValue18 * 0.125) + Number(inputValue19 * 0.032) + Number(inputValue20 * 0.43)
                                        + Number(inputValue24 * 0.03) + Number(inputValue25 * 0.22) + Number(inputValue28 * 0.2) + Number(inputValue29 * 0.18)
                                        + Number(inputValue30 * 0.01) + Number(inputValue36 * 0.016) + Number(inputValue37 * 0.02) + Number(inputValue38 * 0.01)
                                        + Number(inputValue39 * 0.016) + Number(inputValue40 * 0.03) + Number(inputValue41 * 0.02) + Number(inputValue42 * 0.029)
                                        + Number(inputValue43 * 0.01) + Number(inputValue44 * 0.01) + Number(inputValue45 * 0.011) + Number(inputValue46 * 0.0088)
                                        + Number(inputValue47 * 0.008)).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(Number(inputValue1 * 0.78) + Number(inputValue2 * 0.644) + Number(inputValue3 * 0.2) + Number(inputValue4 * 0.77)
                                        + Number(inputValue5 * 0.063) + Number(inputValue6 * 0.6) + Number(inputValue7 * 0.56) + Number(inputValue8 * 0.45)
                                        + Number(inputValue17 * 0.045) + Number(inputValue18 * 0.04) + (inputValue19 * 0.035) + Number(inputValue20 * 0.03)
                                        + Number(inputValue24 * 0.15) + Number(inputValue25 * 0.2) + Number(inputValue28 * 0.2) + Number(inputValue29 * 0.28)
                                        + Number(inputValue30 * 0.23) + Number(inputValue31 * 0.13) + Number(inputValue32 * 0.117) + Number(inputValue33 * 0.816)
                                        + Number(inputValue34 * 0.07) + Number(inputValue35 * 0.126) + Number(inputValue36 * 0.66) + Number(inputValue37 * 0.03)
                                        + Number(inputValue38 * 0.09) + Number(inputValue39 * 0.1) + Number(inputValue40 * 0.07) + Number(inputValue41 * 0.1)
                                        + Number(inputValue42 * 0.036) + Number(inputValue43 * 0.03) + Number(inputValue44 * 0.14) + Number(inputValue45 * 0.029)
                                        + Number(inputValue46 * 0.039) + Number(inputValue47 * 0.059) + Number(inputValue48 * 0.026) + Number(inputValue49 * 0.035)
                                    ).toFixed(1)
                                    }
                                </td>
                                <td className="protein">
                                    {(Number(inputValue4 * 0.015) + Number(inputValue5 * 0.018) + Number(inputValue6 * 0.01) + Number(inputValue7 * 0.01)
                                        + Number(inputValue8 * 0.016) + Number(inputValue9 * 0.209) + Number(inputValue10 * 0.068) + Number(inputValue11 * 0.01)
                                        + Number(inputValue12 * 0.125) + Number(inputValue13 * 0.125) + Number(inputValue14 * 0.09) + Number(inputValue15 * 5)
                                        + Number(inputValue16 * 0.83) + Number(inputValue17 * 0.28) + Number(inputValue18 * 0.055) + Number(inputValue19 * 0.028)
                                        + Number(inputValue20 * 0.35) + Number(inputValue21 * 1) + Number(inputValue22 * 0.14) + Number(inputValue23 * 1)
                                        + Number(inputValue24 * 0.335) + Number(inputValue25 * 0.54) + Number(inputValue26 * 0.622) + Number(inputValue27 * 0.605)
                                        + Number(inputValue28 * 0.515) + Number(inputValue29 * 0.42) + Number(inputValue36 * 0.01)).toFixed(1)}
                                </td>
                                <td className="protein">
                                    {(Number(inputValue1 * 3.51) + Number(inputValue2 * 3.74) + Number(inputValue3 * 0.85) + Number(inputValue4 * 3.5)
                                        + Number(inputValue5 * 3.37) + Number(inputValue6 * 3.4) + Number(inputValue7 * 3.1) + Number(inputValue8 * 2.7)
                                        + Number(inputValue9 * 2.84) + Number(inputValue10 * 1.45) + Number(inputValue11 * 0.95) + Number(inputValue12 * 1.19)
                                        + Number(inputValue13 * 1.91) + Number(inputValue14 * 1.61) + Number(inputValue15 * 55 * 1.62) + Number(inputValue16 * 7.5)
                                        + Number(inputValue17 * 0.56) + Number(inputValue18 * 1.15) + Number(inputValue19 * 0.52) + Number(inputValue20 * 5)
                                        + Number(inputValue21 * 8.84) + Number(inputValue22 * 1.46) + Number(inputValue23 * 8.9) + Number(inputValue24 * 3.54)
                                        + Number(inputValue25 * 6.34) + Number(inputValue26 * 6.77) + Number(inputValue27 * 6.57) + Number(inputValue28 * 5.84)
                                        + Number(inputValue29 * 5.34) + Number(inputValue30 * 0.89) + Number(inputValue31 * 0.5) + Number(inputValue32 * 0.47)
                                        + Number(inputValue33 * 0.34) + Number(inputValue34 * 0.28) + Number(inputValue35 * 0.48) + Number(inputValue36 * 2.7)
                                        + Number(inputValue37 * 0.22) + Number(inputValue38 * 0.4) + Number(inputValue39 * 0.43) + Number(inputValue40 * 0.34)
                                        + Number(inputValue41 * 0.5) + Number(inputValue42 * 0.23) + Number(inputValue43 * 0.16) + Number(inputValue44 * 0.61)
                                        + Number(inputValue45 * 0.16) + Number(inputValue46 * 0.18) + Number(inputValue47 * 0.27) + Number(inputValue48 * 0.85)
                                        + Number(inputValue49 * 0.43) + Number(inputValue50 * 3.5)).toFixed(1)}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <div>

            </div>
            {/* <div>{<BackToTop />}</div> */}
        </>
    )
}
export default CaloriesOld;